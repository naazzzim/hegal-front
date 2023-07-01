import { createStore } from 'redux';
import englishData from '../../lang/en/constant/en.json'
import russianData from '../../lang/ru/constant/ru.json'
import arabicData from '../../lang/ar/constant/ar.json'

const initialState = englishData;

const initAction={
    type: 'en',
};
const languageReducer = (state = initialState, action=initAction) => {
    switch (action.type) {
        case 'ru':
            return russianData
        case 'en':
            return englishData
        case 'ar':
            return arabicData
        default:
            return state;
    }
};

export default languageReducer;
