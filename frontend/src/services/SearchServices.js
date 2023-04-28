import axios from "axios";

class SearchServices {
    static searchResults = (cat, term) => axios.post(`/results?category=${cat}&term=${term}`)
}

export default SearchServices