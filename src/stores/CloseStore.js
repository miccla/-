import alt from '../alt';
import MenuActions from '../actions/MenuActions';
import { StaticSources } from '../sources/StaticSources';

class CloseStore {
  constructor() {
    this.companies = [];
    this.companyValue = '';
    this.accounts = [];
    this.accountValue = '';
    this.accountDisabled = true;

    this.registerAsync(StaticSources);

    this.bindListeners({
      handleUpdateCompanies: MenuActions.UPDATE_COMPANIES,
      handleUpdateCompanyValue: MenuActions.UPDATE_COMPANY_VALUE,
      handleCompaniesFailed: MenuActions.COMPANIES_FAILED,
      handleUpdateAccounts: MenuActions.UPDATE_ACCOUNTS,
      handleUpdateAccountValue: MenuActions.UPDATE_ACCOUNT_VALUE,
      handleAccountsFailed: MenuActions.ACCOUNTS_FAILED,
    });
  }

  handleUpdateCompanies(companies) {
    this.companies = companies;
  }

  handleUpdateCompanyValue(company) {
    this.companyValue = company;
    this.accountValue = '';
    this.accounts = [];
    this.getInstance().getAccounts(company);
    !!company ? this.accountDisabled = false : this.accountDisabled = true;
  }

  handleCompaniesFailed(errorMessage) {
    console.log(errorMessage);
  }

  handleUpdateAccounts(accounts) {
    this.accounts = accounts;
  }

  handleUpdateAccountValue(account) {
    this.accountValue = account;
  }

  handleAccountsFailed(errorMessage) {
    console.log(errorMessage);
  }
}

export default alt.createStore(CloseStore, 'CloseStore');
