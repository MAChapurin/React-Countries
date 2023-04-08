export const SET_COUNTRIES = "@@country/SET_COUNTRIES";
export const SET_LOADING = "@@country/SET_LOADING";
export const SET_ERROR = "@@country/SET_ERROR";

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const seLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

//_ здесь мог бы быть getState
export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(seLoading());

    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((error) => dispatch(setError(error.message)));
  };
