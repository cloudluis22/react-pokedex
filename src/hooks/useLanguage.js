import {useState} from 'react'
import es from '../lang/es.json';
import en from '../lang/en.json';
import fr from '../lang/fr.json';

const useLanguage = (lang) => {

    const [language, setLanguage] = useState(en)
    const setLang = (lang) => {
    
    switch (lang) {
       case 'es':
           setLanguage(es)
           break;
    
        case 'en':
            setLanguage(en)
            break;
   
        case 'fr':
            setLanguage(fr)
            break;
   
        default:
            setLanguage(en)
            break;
    }
 }

 return [language, setLang];

}

export default useLanguage