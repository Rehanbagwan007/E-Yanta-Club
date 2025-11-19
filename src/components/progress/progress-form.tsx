import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";

export function ProgressForm() {
  return (
    <Card className="shadow-soft border-0">
      <CardHeader>
        <CardTitle>Submit Your Progress</CardTitle>
        <CardDescription>
          Let your mentors and team know what you've accomplished.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="e.g., Calibrated the PID controller" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your work, challenges, and learnings."
              className="min-h-[120px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="picture">Add an image</Label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-accent/50 hover:bg-accent">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <Input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 
          </div>
          <Button type="submit" className="w-full">Submit Progress</Button>
        </form>
      </CardContent>
    </Card>
  );
}
