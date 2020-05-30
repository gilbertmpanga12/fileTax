
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
    tinId?: string;
    tinPassword?: string;
}

export interface History{
    date: number;
    taxFiledName: string;
}

export interface DialogActtion{
    actionType: "resetpassword" | "changeTinId" | "changeTinPassword" | "error"
}

export interface OfflineTaxFiling{
    date: Date;
    taxServicesRequired: string[];
    requesteeType: "individual" | "company",
    requesteeName: string;
    uid: string;
}