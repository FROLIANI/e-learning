
import { gql, request } from 'graphql-request'

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxqvi7kv031708uv5sz8y1r3/master";

// API CALL
export const getCourseList =async()=>{
    const query = gql`
    courses(where: {level: Basic}) {
    id
    name
    price
    level
    tags
    time
    author
    banner {
      url
    }
    chapters {
      id
    }
  }
}
    `
    const data = await request(MASTER_URL, query)
    return data.courses

}