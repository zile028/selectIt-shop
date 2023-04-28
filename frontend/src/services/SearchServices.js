import axios from "axios";

class SearchServices {
    static searchResults = (cat, term) => axios.post(`/results/${cat}/${term}`)
}

export default SearchServices