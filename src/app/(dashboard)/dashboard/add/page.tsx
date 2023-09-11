import { AddFriendButton } from "@/components/add-friend-button";

export default function DashboardAddPage() {
  return (
    <main className="pt-8">
      <h2 className="font-bold text-5xl mb-8">Add a friend</h2>
      <AddFriendButton />
    </main>
  );
}