const products_url = process.env.REACT_APP_PRODUCTS_API_URL;
const users_url = process.env.REACT_APP_USERS_API_URL;

const apiClient = {
    getAllProducts: function () {
        var promise = new Promise((resolve, reject) => {
            return fetch(products_url).then((res) => {
                var result = res.json();
                result.then((jResult) => {
                    resolve(jResult);
                }, (err) => {
                    reject("JSON Parse Error");
                });
            }).catch((err) => {
                reject("Error connecting to the API");
            });
        });

        return promise;
    },

    getAllUsers: function () {
        var promise = new Promise((resolve, reject) => {
            return fetch(users_url).then((res) => {
                var result = res.json();
                result.then((jResult) => {
                    resolve(jResult);
                }, (err) => {
                    reject("JSON Parse Error");
                });
            }).catch((err) => {
                reject("Error connecting to the API");
            });
        });

        return promise;
    }
}

export default apiClient;