
export interface DashboardCount{
    totalTaxesFiled: number;
    latestTaxFiled: number;
    lastestTaxFiledName: string;
}

export interface TaxServices {
    title: string;
    description: string;
  }

export interface IndividualUser{
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    dateOfBirth: Date;
    uid: string;
    profileSetup: number;
}
  