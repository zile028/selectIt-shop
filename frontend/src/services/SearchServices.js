import axios from "axios";

class SearchServices {
    static searchResults = (term) => axios.post(`/results/${term}`)
}

export default SearchServices