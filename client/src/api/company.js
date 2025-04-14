import { baseApi } from "./base";

// @route    FETCH /company/
// @desc     Get A Company by ID
// @access   Private
export function fetchCompany(id, options) {
  return baseApi.get(`/company/${id}`, options).then((res) => res.data);
}
