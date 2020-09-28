export const enum OperationTabs {
  planned = 'planned',
  completed = 'completed',
}

export const getOperationTabLabel = (tab: OperationTabs) => {
  switch (tab) {
    case OperationTabs.planned:
      return 'Запланированные операции'

    case OperationTabs.completed:
      return 'Выполненные операции'

    default:
      return tab
  }
}
