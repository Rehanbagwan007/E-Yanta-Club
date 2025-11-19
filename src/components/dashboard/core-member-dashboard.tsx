import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";

export function CoreMemberDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Core Member Dashboard</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="shadow-soft border-0">
          <CardHeader>
            <CardTitle>Log Your Daily Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Textarea placeholder="What did you work on today?" className="min-h-[120px]" />
              <Button>Submit Progress</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0">
          <CardHeader>
            <CardTitle>Team Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Team progress review and support sections will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
