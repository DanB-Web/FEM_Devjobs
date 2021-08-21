import { gql } from "@apollo/client";

export const ADD_APPLICANT = gql`
  mutation AddApplicant ($job:String! $company:String! $name:String! $email:String!){
    insert_applicant_one(object: {job:$job company:$company name:$name email:$email}) {
      job
      company
      name
      email
    }
  }
`