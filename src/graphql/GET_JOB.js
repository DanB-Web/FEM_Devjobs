import { gql } from "@apollo/client";

export const GET_JOB = gql`
  query getJob ($id: Int) {
    job(where: {id: {_eq: $id}}) {
      companyByCompany {
        companyName
        id
        companyWebsite
        companyLogo
        companyLocation
        companyColor
        companyApplyLink
      }
      contract
      description
      id
      position
      postedAt
      requirementsContent
      requirementsItems
      roleContent
      roleContentItems
    }
  }
`