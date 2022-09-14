import { FollowerList } from "@/components/Follower"
import { render } from "@testing-library/react"

const apiResponse = [{
    avatar_url:"https://avatars.githubusercontent.com/u/6079947?v=4",
    events_url:"https://api.github.com/users/hstrada/events{/privacy}",
    followers_url:"https://api.github.com/users/hstrada/followers",
    following_url:"https://api.github.com/users/hstrada/following{/other_user}",
    gists_url:"https://api.github.com/users/hstrada/gists{/gist_id}",
    gravatar_id:"",
    html_url:"https://github.com/hstrada",
    id:6079947,
    login:"hstrada",
    node_id:"MDQ6VXNlcjYwNzk5NDc=",
    organizations_url:"https://api.github.com/users/hstrada/orgs",
    received_events_url:"https://api.github.com/users/hstrada/received_events",
    repos_url:"https://api.github.com/users/hstrada/repos",
    site_admin:false,
    starred_url:"https://api.github.com/users/hstrada/starred{/owner}{/repo}",
    subscriptions_url:"https://api.github.com/users/hstrada/subscriptions",
    type:"User",
    url: "https://api.github.com/users/hstrada"
}, 
{
    avatar_url: "https://avatars.githubusercontent.com/u/9363099?v=4",
    events_url: "https://api.github.com/users/armancodv/events{/privacy}",
    followers_url: "https://api.github.com/users/armancodv/followers",
    following_url: "https://api.github.com/users/armancodv/following{/other_user}",
    gists_url: "https://api.github.com/users/armancodv/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/armancodv",
    id: 9363099,
    login: "armancodv",
    node_id: "MDQ6VXNlcjkzNjMwOTk=",
    organizations_url: "https://api.github.com/users/armancodv/orgs",
    received_events_url: "https://api.github.com/users/armancodv/received_events",
    repos_url: "https://api.github.com/users/armancodv/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/armancodv/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/armancodv/subscriptions",
    type: "User",
    url: "https://api.github.com/users/armancodv",
},
{
    avatar_url: "https://avatars.githubusercontent.com/u/7036736?v=4",
    events_url: "https://api.github.com/users/vivekweb2013/events{/privacy}",
    followers_url: "https://api.github.com/users/vivekweb2013/followers",
    following_url: "https://api.github.com/users/vivekweb2013/following{/other_user}",
    gists_url: "https://api.github.com/users/vivekweb2013/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/vivekweb2013",
    id: 7036736,
    login: "vivekweb2013",
    node_id: "MDQ6VXNlcjcwMzY3MzY=",
    organizations_url: "https://api.github.com/users/vivekweb2013/orgs",
    received_events_url: "https://api.github.com/users/vivekweb2013/received_events",
    repos_url: "https://api.github.com/users/vivekweb2013/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/vivekweb2013/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/vivekweb2013/subscriptions",
    type: "User",
    url: "https://api.github.com/users/vivekweb2013",
}]

jest.mock('@tanstack/react-query', () => {
    return {
        useQuery: (params: any, callback: any) => {
            let obj = {
                data: apiResponse,
                isLoading: true
            }
            return obj
        }
    }
})

describe('FollowerList test', () => {
    it('should be able to render followers list', () => {

        const { getByTestId } = render(<FollowerList />)

        const listContainer = getByTestId('list-container')
        
        expect(listContainer).toHaveTextContent('hstrada')
    })
})