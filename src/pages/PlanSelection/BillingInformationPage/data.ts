export const pointsData = [
    'Auto Monthly/Annually Invoice',
    'Auto Monthly/Annuoice',
    'Auto Monthly/Annually Invoice Auto Monthly/Annually',
    'Auto Monthly/Annually Invoice Auto Monthly/',
    'Auto Monthly/Annually Invoice Auto Monthly/Annu',
];

export type typeInitialPaymentObj = {name: string; active: boolean};

export const initialPaymentModesData = [
    {
        name: 'Wire Transfer',
        active: false
    },
    {
        name: 'Paypal',
        active: false
    },
    {
        name: 'Stripe',
        active: false
    }
];

export const BillingFormFieldsData = [
    {
        label: 'Address',
        name: 'address',
        type: 'text',
    },
    {
        label: 'City',
        name: 'city',
        type: 'text',
    },
    {
        label: 'State',
        name: 'state',
        type: 'text',
    },
    {
        label: 'Country',
        name: 'country',
        type: 'text',
    },
    {
        label: 'Pincode',
        name: 'pincode',
        type: 'text',
    },
];

export const initialPaymentModeDetailData = [
    {
        head: 'Account Holder',
        data: ''
    },
    {
        head: 'Account Number',
        data: ''
    },
    {
        head: 'IFSC',
        data: ''
    },
    {
        head: 'Branch',
        data: ''
    },
    {
        head: 'Account Type',
        data: ''
    },
    {
        head: 'Virtual Payment Address',
        data: ''
    }
];