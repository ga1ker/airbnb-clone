import countries from 'world-countries';

const formattedCountries = countries.map((country: any) => ({
    value: country.cca2,
    label: country.name.common
}));

const useCountries = () => {
    const getAll = () => formattedCountries;

    const getByValue = (value: string) => {
        return formattedCountries.find((item: any) => item.value === value);
    }

    return {
        getAll,
        getByValue
    }
}

export default useCountries;