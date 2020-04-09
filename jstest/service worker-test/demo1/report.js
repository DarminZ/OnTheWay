module.exports = {
    data: {
        ResultSet: [
            {
                Child: [
                    {
                        Child: [
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'kube-apiserver',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'kube-scheduler',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'kube-controller-manager',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'etcd',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'kubelet',
                                Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'kube-proxy',
                                Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'dockerd',
                                Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            }
                        ],
                        Details: [],
                        Error: '',
                        Name: 'components-status',
                        Statistic: { FailedItem: 0, GoodItem: 3, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                    },
                    {
                        Child: [
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'master',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'worker',
                                Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            }
                        ],
                        Details: [],
                        Error: '',
                        Name: 'nodes-status',
                        Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                    },
                    {
                        Child: [
                            {
                                Child: [
                                    {
                                        Child: [],
                                        Details: [
                                            {
                                                Level: 'warn',
                                                ObjInfo: {
                                                    Available: 1,
                                                    Name: 'coredns',
                                                    Namespace: 'kube-system',
                                                    Replicas: 2,
                                                    Workload: 'Deployment'
                                                },
                                                ObjName: 'Deployment/coredns',
                                                Title: 'workload-status'
                                            }
                                        ],
                                        Error: '',
                                        Name: 'Deployment/coredns',
                                        Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 1 }
                                    }
                                ],
                                Details: [],
                                Error: '',
                                Name: 'kube-system',
                                Statistic: { FailedItem: 0, GoodItem: 6, RiskItem: 0, SeriousItem: 0, WarnItem: 1 }
                            }
                        ],
                        Details: [],
                        Error: '',
                        Name: 'workload-status',
                        Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 1 }
                    }
                ],
                Details: [],
                Error: '',
                Name: 'resources',
                Statistic: { FailedItem: 0, GoodItem: 2, RiskItem: 0, SeriousItem: 0, WarnItem: 1 }
            },
            {
                Child: [
                    {
                        Child: [],
                        Details: [],
                        Error: '',
                        Name: 'cluster-runtime',
                        Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                    },
                    {
                        Child: [
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'master-capacity',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [
                                    {
                                        Level: 'serious',
                                        ObjInfo: { CurTotalNode: 1, Name: 'node-num' },
                                        ObjName: 'node-num',
                                        Title: 'node-ha-num'
                                    }
                                ],
                                Error: '',
                                Name: 'node-ha',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 1, WarnItem: 0 }
                            }
                        ],
                        Details: [],
                        Error: '',
                        Name: 'node-runtime',
                        Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 1, WarnItem: 0 }
                    },
                    {
                        Child: [
                            {
                                Child: [
                                    {
                                        Child: [
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'warn',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'tiller-deploy', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/tiller-deploy',
                                                        Title: 'requests-limits'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/tiller-deploy',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 0,
                                                    SeriousItem: 0,
                                                    WarnItem: 1
                                                }
                                            }
                                        ],
                                        Details: [],
                                        Error: '',
                                        Name: 'kube-system',
                                        Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 2 }
                                    }
                                ],
                                Details: [],
                                Error: '',
                                Name: 'requests-limits',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 1 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'affinity',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [],
                                Details: [],
                                Error: '',
                                Name: 'pdb',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            },
                            {
                                Child: [
                                    {
                                        Child: [
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            },
                                            {
                                                Child: [],
                                                Details: [
                                                    {
                                                        Level: 'risk',
                                                        ObjInfo: { Kind: 'Deployment', Name: 'swift', Namespace: 'kube-system' },
                                                        ObjName: 'Deployment/swift',
                                                        Title: 'health-check'
                                                    }
                                                ],
                                                Error: '',
                                                Name: 'Deployment/swift',
                                                Statistic: {
                                                    FailedItem: 0,
                                                    GoodItem: 0,
                                                    RiskItem: 1,
                                                    SeriousItem: 0,
                                                    WarnItem: 0
                                                }
                                            }
                                        ],
                                        Details: [],
                                        Error: '',
                                        Name: 'kube-system',
                                        Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 1, SeriousItem: 0, WarnItem: 0 }
                                    }
                                ],
                                Details: [],
                                Error: '',
                                Name: 'health-check',
                                Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 1, SeriousItem: 0, WarnItem: 0 }
                            }
                        ],
                        Details: [],
                        Error: '',
                        Name: 'workload-runtime',
                        Statistic: { FailedItem: 0, GoodItem: 0, RiskItem: 1, SeriousItem: 0, WarnItem: 1 }
                    },
                    {
                        Child: [
                            {
                                Child: [],
                                Details: [
                                    {
                                        Level: 'good',
                                        ObjInfo: { ClusterIPCount: 62, CurrentIPCount: 5, HPAMaxIPCount: 5 },
                                        ObjName: 'HPA',
                                        Title: 'hpa-ip'
                                    }
                                ],
                                Error: '',
                                Name: 'hpa-ip',
                                Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                            }
                        ],
                        Details: [],
                        Error: '',
                        Name: 'hpa-runtime',
                        Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 0, SeriousItem: 0, WarnItem: 0 }
                    }
                ],
                Details: [],
                Error: '',
                Name: 'runtime',
                Statistic: { FailedItem: 0, GoodItem: 1, RiskItem: 1, SeriousItem: 1, WarnItem: 0 }
            }
        ]
    },
    code: 0
};
