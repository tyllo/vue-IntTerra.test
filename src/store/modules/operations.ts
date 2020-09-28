import {
  Getters,
  Mutations,
  Actions,
  Module,
} from 'vuex-smart-module'
import FieldService from '@/FieldService'
import Operation from '@/models/Operation'
import { OperationsFilters } from '@/typings/common'
import { SortDirection } from '@/helpers/enums/SortDirection'
import sortBy from 'lodash/sortBy'
import { dateComparator } from '@/helpers/dateComparator'


type S = OperationsState
type G = OperationsGetters
type M = OperationsMutations
type A = OperationsActions

export class OperationsState {
  public operations: Operation[] = [];

  public filters: OperationsFilters = {};
}

export class OperationsGetters extends Getters<S> {
  // TODO: Я рассчитывал на серверную фильтрацию, а не на фильтрация в таблице
  // дописать сортировку только для таблицы не сложно
  public get filteredOperations() {
    const { sortKey, sortDirection } = this.state.filters

    switch (sortKey) {
      case 'date': {
        const result = this.state.operations
          .slice()
          .sort((a, b) => dateComparator(a.date, b.date))

        return sortDirection === SortDirection.desc
          ? result.reverse()
          : result
        }

      case 'comment':
      case 'type':
      case 'assessment': {
        const result = sortBy(this.state.operations, sortKey)
        return sortDirection === SortDirection.desc
          ? result.reverse()
          : result
        }

      default:
        return this.state.operations
    }
  }
}

export class OperationsMutations extends Mutations<S> {
  public setOperation(payload: Operation[]) {
    this.state.operations = payload
  }

  public setFilters(payload: OperationsFilters) {
    this.state.filters = payload
  }
}

export class OperationsActions extends Actions<S, G, M, A> {
  public fieldService = new FieldService();

  public async getOperations(filters: OperationsFilters) {
    const response = await this.fieldService.getOperations()
    this.mutations.setOperation(response)
    this.mutations.setFilters(filters)
  }
}

export const operationsStore = new Module({
  namespaced: true,
  state: OperationsState,
  getters: OperationsGetters,
  mutations: OperationsMutations,
  actions: OperationsActions,
})
