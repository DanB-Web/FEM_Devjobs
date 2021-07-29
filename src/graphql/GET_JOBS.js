import { gql } from "@apollo/client";

export const GET_JOBS = gql`
  query getJobs ($offset: Int) {
      job (offset: $offset, limit: 6) {
        id
        position
        postedAt
        contract
        companyByCompany {
          companyName
          companyLocation
          companyLogo
          companyColor
      }
    }
  }
`