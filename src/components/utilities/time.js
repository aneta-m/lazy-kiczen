

// export class Dates {
//     public static getDateParameters(time = new Date()) {

//     }

//     public static other() {
//         Dates.getDateParameters();
//     }
// }

export const getDateParameters = (time = new Date()) => {
    return ({
        year: time.getFullYear(),
        month: time.getMonth(),
        day: time.getDate()
    });
};

export const createDate = (dateObject) => {
    return (new Date(dateObject.year, dateObject.month, dateObject.day));
};

export const getLastPlannedTimeDescription = (dateParamObject) => {

    let lastPlannedDate;
    try {
        lastPlannedDate = createDate(dateParamObject);

        if (isNaN(lastPlannedDate)) {
            throw new Error('Is nan oskansdkansd');
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }

    const timeSinceLastPlanned = computeApproximateTimeDifference(lastPlannedDate);
    let approximateTimeDescription;
    if (timeSinceLastPlanned.isRounded) {
        approximateTimeDescription = `${timeSinceLastPlanned.estimation} ${(timeSinceLastPlanned.number === 1) ? "a" : timeSinceLastPlanned.number}  ${timeSinceLastPlanned.unit} ago`;
    }
    else {
        approximateTimeDescription = getTimeInWeeksAndDaysDescription(timeSinceLastPlanned);
    }
    return (`Last planned ${approximateTimeDescription}.`);
};

const computeApproximateTimeDifference = (startDate, endDate) => {
    const timeDifferenceInDays = getTimeDifferenceInDays(startDate, endDate);
    return convertDaysToMatchedUnit(timeDifferenceInDays);
};


const getTimeDifferenceInDays = (startDate, endDate = Date.now()) => {
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    return Math.floor(endDate - startDate) / MS_PER_DAY;
};

const convertDaysToMatchedUnit = (daysDifference) => {

    switch (true) {
        case (daysDifference < 29):
            return (
                {
                    isRounded: false,
                    weeks: Math.floor(daysDifference / 7),
                    days: Math.floor(daysDifference % 7),

                }
            );
        case (daysDifference < 57):
            return (
                {
                    isRounded: true,
                    unit: "weeks",
                    number: Math.round(daysDifference / 7),
                    estimation: "about"
                }
            );
        case (daysDifference < 350):
            const monthsRounded = roundDaysToMonths(daysDifference);
            return (
                {
                    isRounded: true,
                    unit: "months",
                    number: monthsRounded.monthsNumber,
                    estimation: monthsRounded.estimation
                }

            );

        case (daysDifference >= 350):
            const yearsRounded = roundDaysToYears(daysDifference);
            const unitName = (yearsRounded.yearsNumber === 1) ? "year" : "years";
            return (
                {
                    isRounded: true,
                    unit: unitName,
                    number: yearsRounded.yearsNumber,
                    estimation: yearsRounded.estimation
                }
            );

        default:
            return;
    }
};

const roundDaysToMonths = (daysNumber) => {

    const AVERAGE_DAYS_PER_MONTH = Math.round(10 * 365 / 12) / 10;
    const monthsRounded = Math.round(Math.floor(daysNumber / AVERAGE_DAYS_PER_MONTH));
    const monthsRoundedDown = Math.floor(Math.floor(daysNumber / AVERAGE_DAYS_PER_MONTH));
    const remainingDays = Math.floor(daysNumber % AVERAGE_DAYS_PER_MONTH);

    let estimation;
    let monthsNumber;

    if (remainingDays <= 5) {
        estimation = "about";
        monthsNumber = monthsRounded;
    }

    if (remainingDays > 5 && remainingDays < 14) {
        estimation = "over";
        monthsNumber = monthsRounded;
    }

    if (remainingDays >= 14 && remainingDays < 18) {
        estimation = "about";
        monthsNumber = monthsRoundedDown + 0.5;
    }

    if (remainingDays >= 18 && remainingDays < 26) {
        estimation = "over";
        monthsNumber = monthsRoundedDown + 0.5;
    }

    if (remainingDays >= 26) {
        estimation = "about";
        monthsNumber = monthsRounded;
    }

    return (
        {
            estimation,
            monthsNumber
        }
    );
};

const roundDaysToYears = (daysNumber) => {
    const yearsRounded = Math.round(daysNumber / 365);
    const yearsRoundedDown = Math.floor(daysNumber / 365);
    const daysRemaining = daysNumber % 365;
    let estimation;
    let yearsNumber;

    if (daysRemaining < 30) {
        estimation = "about";
        yearsNumber = yearsRounded;
    }

    if (daysRemaining >= 30 && daysRemaining < 335) {
        estimation = "over";
        yearsNumber = yearsRoundedDown;
    }

    if (daysRemaining >= 335) {
        estimation = "about";
        yearsNumber = yearsRounded + 1;
    }

    return (
        {
            estimation,
            yearsNumber
        }
    );

};

const getTimeInWeeksAndDaysDescription = (timeInWeeksAndDays) => {
    const weeks = timeInWeeksAndDays.weeks;
    const days = timeInWeeksAndDays.days;
    if (weeks === 0 && days === 0) {
        return 'today';
    }
    const timeDescription = `
    ${(weeks === 1) ? "a week " : ""}
    ${(weeks > 1) ? weeks + " weeks " : ""}
    
    ${(weeks > 0 && days > 0) ? "and " : ""}
    

    ${(days === 1) ? days + " day " : ""}
    ${(days > 1) ? days + " days " : ""}
     ago`;
    return timeDescription;
};





