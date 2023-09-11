import { FriendRequests } from "@/components/friend-requests";
import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";



export default async function DashboardRequestsPage() {
  const session = await getServerSession(authOptions)
  if (!session) notFound()

  // IDs of people who sent current logged in user a friend request
  const incomingSenderIds = await fetchRedis('smembers', `user:${session.user.id}:incoming_friend_requests`) as string[]

  const incomingFiendsRequests = await Promise.all(
    incomingSenderIds.map(async (senderId) => {
      const sender = await fetchRedis('get', `user:${senderId}`) as string
      const senderParsed = JSON.parse(sender) as User 
      return {
        senderId,
        senderEmail: senderParsed.email
      }
    })
  )

  return (
    <main className="pt-8">
      <h2 className="font-bold text-5xl mb-8">Add a friend</h2>
      <div className="flex flex-col gap-4">
        <FriendRequests incomingFriendRequets={incomingFiendsRequests} sessionId={session.user.id} />
      </div>
    </main>
  );
}