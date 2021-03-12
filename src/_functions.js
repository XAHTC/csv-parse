export const stateNameToAbbr = (abbr) => {
    const states = {
        arizona: 'AZ',
        alabama: 'AL',
        alaska: 'AK',
        arkansas: 'AR',
        california: 'CA',
        colorado: 'CO',
        connecticut: 'CT',
        'district of columbia': 'DC',
        delaware: 'DE',
        florida: 'FL',
        georgia: 'GA',
        guam: 'GU',
        hawaii: 'HI',
        idaho: 'ID',
        illinois: 'IL',
        indiana: 'IN',
        iowa: 'IA',
        kansas: 'KS',
        kentucky: 'KY',
        louisiana: 'LA',
        'marshall islands': 'MH',
        maine: 'ME',
        maryland: 'MD',
        massachusetts: 'MA',
        michigan: 'MI',
        minnesota: 'MN',
        mississippi: 'MS',
        missouri: 'MO',
        micronesia: 'FM',
        montana: 'MT',
        nebraska: 'NE',
        nevada: 'NV',
        'new hampshire': 'NH',
        'new jersey': 'NJ',
        'new mexico': 'NM',
        'new york': 'NY',
        'north carolina': 'NC',
        'north dakota': 'ND',
        ohio: 'OH',
        oklahoma: 'OK',
        oregon: 'OR',
        pennsylvania: 'PA',
        palau: 'PW',
        'rhode island': 'RI',
        'south carolina': 'SC',
        'south dakota': 'SD',
        tennessee: 'TN',
        texas: 'TX',
        utah: 'UT',
        vermont: 'VT',
        virginia: 'VA',
        'virgin islands': 'VI',
        washington: 'WA',
        'west virginia': 'WV',
        wisconsin: 'WI',
        wyoming: 'WY',
        'american samoa': 'AS',
        'northern mariana islands': 'MP',
        'puerto rico': 'PR',
        'us virgin islands': 'VI',
        'us minor outlying islands': 'UM',
    };

    const a = abbr
        .trim()
        .replace(/[^\w ]/g, '')
        .toLowerCase();

    if (states[a] !== null) {
        return states[a];
    }

    return null;
};

export const checkEmail = (email) => {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = email.match(emailReg);

    if (result) {
        return true;
    }

    return false;
};

export const checkAge = (age) => {
    return Number.isInteger(+age) && +age >= 21;
};

export const checkExperience = (number, age) => {
    return +number >= 0 && +number <= +age;
};

export const checkDate = (date) => {
    const parseDate = new Date(date);
    const nowDate = new Date();

    if (parseDate < nowDate) {
        return false;
    }

    const YYYY_MM_DD = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    const DD_MM_YYYY = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/;
    const result_YYYY_MM_DD = date.match(YYYY_MM_DD);
    const result_DD_MM_YYYY = date.match(DD_MM_YYYY);

    if (result_DD_MM_YYYY || result_YYYY_MM_DD) {
        return true;
    }

    return false;
};

export const formatYearlyIncome = (sum) => {
    const number = +sum;
    if (!Number.isNaN(number)) {
        return (Math.round(sum * 100) / 100).toFixed(2);
    }

    return sum;
};

export const checkYearlyIncome = (sum) => {
    if (Number.isNaN(sum)) {
        return false;
    }

    return sum >= 0 && sum < 1000000;
};

export const formatPhone = (phone) => {
    const cleanPhone = phone.replace(/^(\+1|^1)/, '').trim();
    return `+1${cleanPhone}`;
};

export const formatChildren = (isChildren) => {
    if (isChildren.trim() === '') {
        return 'FALSE';
    }

    return isChildren;
};

export const checkChildren = (isChildren) => {
    if (isChildren === 'FALSE' || isChildren === 'TRUE' || isChildren.trim() === '') {
        return true;
    }

    return false;
};

export const checkLicense = (license) => {
    const licenseReg = /^[a-zA-Z0-9]{6}$/;
    const result = license.match(licenseReg);

    if (result) {
        return true;
    }

    return false;
};

export const formatState = (state) => {
    const shortArr = state.split(' | ').filter((item) => item.length === 2);
    const longArr = state
        .toLowerCase()
        .split(' | ')
        .filter((item) => item.length > 2)
        .map((item) => stateNameToAbbr(item));
    const result = [...shortArr, ...longArr];
    return result.join(' | ');
};
