
export interface DashboardCount{
    totalTaxesFiled: number;
    latestTaxFiled: number;
    lastestTaxFiledName: string;
}

export interface TaxServices {
    title: string;
    description: string;
    url: string;
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
    notificationCount: number;
}

export interface History{
    date: number;
    taxFiledName: string;
}

export interface DialogActtion{
    actionType: "resetpassword" | "changeTinId" | "changeTinPassword" | "error" | "changeName";
    accountType: "company" | "individual";
}

export interface OfflineTaxFiling{
    date: Date;
    taxServicesRequired: string[];
    requesteeType: "users" | "company_users",
    requesteeName: string;
    uid: string;
    email: string;
    telephone: string;
}

export interface BasicProfileDocuments{
    name: string;
    path: string;
}

export interface BasicProfile{
    motherMaidenName: string;
    telephone: string;
    sex: string;
    maritalStatus: string;
    citizenship: string;
    aliasNameKnown: "Yes" | "No";
    aliasFullName?: string;
    minor: "Yes" | "No";
    minorGuardianName?: string;
    corporatePartnership: "Yes" | "No";
    sourceOfIncome: "Self employed" | "Employed or owns Business";
    selfEmployedAddress?: string;
    selfEmployedTin?: string;
    employerTin?: string;
    employerName?: string;
    employerTelephoneNumber?: string;
    district: string;
    city: string;
    // parish: string;
    // subCounty: string;
    // village: string;
    documents: BasicProfileDocuments[],
    uid: string;
    profileSetup: number;
    
}

export interface TaxNotifications{
    description: string;
    timeStamp: number;
}

export interface Filings {
   uid: string;
   submittedOn: Date;
   fullName: string;
   supportingDocuments:  BasicProfileDocuments[];
   accountType: "users" | "company";
   phoneNumber: string;
   email: string;
}

export interface AccountType {
    isCompany: boolean;
    hasPaid: boolean;
  }
export interface CompanyProfile{
    address: string;
    sourceOfIncome: string;
    fullName: string;
    email: string;
    telephone: string;
    tin: string;
    refereeName: string;
    // refereeTin: string;
    refereeTelephone: string;
    // associatedEntityName:  string;
    // associatedEntityTin: string;
    keyDocuments: BasicProfileDocuments[]
    uid: string;
}