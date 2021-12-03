import React, { useReducer } from "react";

export interface Identifiable {
  id: string | number;
}

export interface OperationResult<TTarget> {
  target: TTarget;
  success: boolean;
  error?: any;
  result?: any;
}

export enum OperationState {
  /** indicates an operation is not started yet */
  Pending = "Pending" as any,

  /** indicates an operation is started, under user interactions */
  Started = "Started" as any,

  /** indicates the operation is performing after an user action */
  Performing = "Performing" as any,

  /** indicates the operation is done (success or failed info is in operation result) */
  Done = "Done" as any,
}

export enum OperationTrigger {
  /** `Pending` =====(target)=====> `Started` */
  Start = "Start" as any,

  /** `Started` =====(params)=====> `Performing` */
  Perform = "Perform" as any,

  /** `Started` =======> `Pending` */
  Cancel = "Cancel" as any,

  /** `Performing` =======> `Done` */
  Done = "Done" as any,

  /** `Done` =======> `Pending` */
  Reset = "Reset" as any,
}

export interface WorkflowState<TTarget extends Identifiable, TParam> {
  /** current operation state */
  operationState: OperationState;

  /** target is specific when started */
  targets?: TTarget[];

  /** params will be stored after perform */
  params?: TParam;

  /** result is specific when done */
  results?: OperationResult<TTarget>[];
}

/** a workflow trigger action */
export interface WorkflowPayload<TTarget extends Identifiable, TParam> {
  /** trigger the work flow */
  trigger: OperationTrigger;

  /** specific operation targers when start, use array for batch operation */
  targets?: TTarget[];

  /** params need during perform trigger */
  params?: TParam;

  /** tell the result when done or failed, will be array for batch operation */
  results?: OperationResult<TTarget>[];
}

export interface WorkflowAction<TTarget extends Identifiable, TParam> {
  type: string | number;
  payload?: WorkflowPayload<TTarget, TParam>;
}

export interface WorkflowActionCreator<TTarget extends Identifiable, TParam> {
  start(targets?: TTarget[], operationParams?: TParam);
  perform(operationParams?: TParam);
  cancel();
  reset();
}

export function useWorkflow<TTarget extends Identifiable, TParam>(options: {
  actionType?: string;
  operationExecutor: (
    targets: TTarget[],
    params: TParam
  ) => Promise<OperationResult<any>[]>;
  onFinish?: (
    result: OperationResult<any>[],
    actions?: WorkflowActionCreator<TTarget, TParam>
  ) => any;
}): [WorkflowState<TTarget, TParam>, WorkflowActionCreator<TTarget, TParam>] {
  let { actionType = "workflow", operationExecutor, onFinish } = options;

  const workflowReducer = (
    state: WorkflowState<TTarget, TParam>,
    action: WorkflowAction<TTarget, TParam>
  ) => {
    let nextState: WorkflowState<TTarget, TParam> = { ...state };
    switch (action.payload.trigger) {
      case OperationTrigger.Start:
        // do not restart while performing
        if (state.operationState !== OperationState.Performing) {
          nextState = {
            operationState: OperationState.Started,
            targets: action.payload.targets,
            params: action.payload.params,
          };
        }
        break;
      case OperationTrigger.Perform:
        if (
          state.operationState === OperationState.Started ||
          state.operationState === OperationState.Done
        ) {
          nextState = {
            operationState: OperationState.Performing,
            targets: state.targets,
            params: action.payload.params,
          };
        }
        break;

      case OperationTrigger.Done:
        if (state.operationState === OperationState.Performing) {
          nextState = {
            operationState: OperationState.Done,
            targets: state.targets,
            results: action.payload.results,
          };
        }
        break;

      case OperationTrigger.Cancel:
        if (state.operationState === OperationState.Started) {
          nextState = {
            operationState: OperationState.Pending,
          };
        }
        break;

      case OperationTrigger.Reset:
        if (state.operationState === OperationState.Done) {
          nextState = {
            operationState: OperationState.Pending,
          };
        }
        break;
    }
    log(state, action, nextState);
    return nextState;
  };

  const [workflow, dispatch] = useReducer(workflowReducer, {
    operationState: OperationState.Pending,
  });
  const actions: WorkflowActionCreator<TTarget, TParam> = {
    start: (targets: TTarget[], operationParams?: TParam) => {
      dispatch({
        type: actionType + (OperationTrigger.Start as any),
        payload: {
          trigger: OperationTrigger.Start,
          targets: targets,
          params: operationParams,
        },
      });
    },
    perform: (params) => {
      dispatch({
        type: actionType + (OperationTrigger.Perform as any),
        payload: {
          trigger: OperationTrigger.Perform,
          params,
        },
      });
      operationExecutor(workflow.targets, params)
        .then((operationResult: OperationResult<any>[]) => {
          dispatch({
            type: actionType + (OperationTrigger.Done as any),
            payload: {
              trigger: OperationTrigger.Done,
              results: operationResult,
            },
          });
          onFinish && onFinish(operationResult, actions);
        })
        .catch((error) => {
          let results = workflow.targets.map((target) => ({
            target,
            success: false,
            error,
          }));
          dispatch({
            type: actionType + (OperationTrigger.Done as any),
            payload: {
              trigger: OperationTrigger.Done,
              results,
            },
          });
          onFinish && onFinish(results, actions);
        });
    },
    cancel: () =>
      dispatch({
        type: actionType + (OperationTrigger.Cancel as any),
        payload: {
          trigger: OperationTrigger.Cancel,
        },
      }),
    reset: () =>
      dispatch({
        type: actionType + (OperationTrigger.Reset as any),
        payload: {
          trigger: OperationTrigger.Reset,
        },
      }),
  };
  return [workflow, actions];
}

function log(preState, action, nextState) {
  if (process.env.NODE_ENV === "development") {
    console.log(
      "preState:",
      preState,
      "action:",
      action,
      "nextState:",
      nextState
    );
  }
}

export function isResultSuccess(results: OperationResult<any>[]) {
  return results.every((item) => item.success);
}
