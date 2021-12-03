/**
 * @fileoverview eslint-plugin-cn-checker
 * @author eslint-plugin-cn-checker
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    /** 规则类型 "problem" | "suggestion" | "layout" */
    type: "problem",
    /** ESLint文档 */
    docs: {
      /** 规则的简短描述 */
      description: "中文字符标记规则",
      /** 指定再规则索引中列出规则的标题 */
      category: "Possible Errors",
      /** 配置文件中的"extends": "eslint:recommended"属性是否启用规则 */
      recommended: false,
      /** 规则的文档链接 */
      url: "",
      /** 规则是否可以返回建议 */
      suggestion: false,
    },
    /** 如果规则可修复则需要这个属性 */
    fixable: "code", // or "whitespace"
    /** 指定一些配置 */
    schema: [
      {
        type: "object",
        properties: {
          quoteStyle: {
            type: "string",
            default: "single",
            description: "使用单引号或双引号",
          },
        },
        additionalProperties: false,
      },
    ],
    /** context.report()中的message映射 */
    messages: {
      msgId: "message content",
    },
  },
  /**
   * @param context 规则上下文对象
   * @returns 返回一个对象，具有ESLint在遍历AST时调用‘访问’节点的方法
   */
  create: function (context) {
    const options = context.options[0] || {};
    const { quoteStyle = "single" } = options;

    const quote = quoteStyle === "single" ? "'" : '"';

    const executor = (node) => {
      if (/[\u4e00-\u9fa5]+/.test(String(node.value))) {
        if (node.parent.type === "CallExpression") {
          const callee = node.parent.callee;
          if (callee.type === "Identifier" && callee.name === "t") {
            return true;
          }
        }
        context.report({
          node,
          messageId: "msgId",
          fix: (fixer) => {
            // 只需要把 'string' 转换为 t('string')
            const fixedCode = `t(${quote}${node.value}${quote})`;
            return fixer.replaceText(node, fixedCode);
          },
        });
      }
    };

    return {
      Literal: executor,
      JSXText: executor,
    };
  },
};
