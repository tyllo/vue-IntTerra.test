export enum OperationTab {
  planned = 'planned',
  completed = 'completed',
}

export const getOperationTabLabel = (tab: OperationTab) => {
  switch (tab) {
    case OperationTab.planned:
      return 'Запланированные операции'

    case OperationTab.completed:
      return 'Выполненные операции'

    default:
      return tab
  }
}
