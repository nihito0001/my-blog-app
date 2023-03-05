import { useSession } from "next-auth/react"

export default function AccessToken() {
  const { data } = useSession()
  if (data) {
    const { accessToken } = data
    console.log(accessToken)
    return <div>Access Token: ***</div>
  } else {
    return <></>
  }
}
