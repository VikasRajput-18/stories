"use client";

import ContentEditor from "@/components/ContentEditor";
import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { formSchema, formSchemaType } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUp, Loader2, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const PostStory = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [isMount, setIsMount] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined,
      content: "",
      publish: false,
      tags: [],
    },
  });

  const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (event.key === "Enter" && input.value) {
      event.preventDefault();
      if (tags.length < 6) {
        const newTags = tags.includes(input.value)
          ? tags
          : [...tags, input.value];
        setTags(newTags);
        form.setValue("tags", newTags);
        input.value = "";
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag: string) => tag !== tagToRemove);
    setTags(newTags);
    form.setValue("tags", newTags);
  };

  const handleRemoveThumbnail = () => {
    setThumbnailUrl(null);
    form.setValue("thumbnail", null);
  };

  const onSubmit = (values: formSchemaType) => {
    console.log("Form submitted with values:", values);
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="border p-5 rounded-md shadow-sm max-w-4xl w-full">
        <h1 className="text-xl md:text-4xl font-semibold text-center">
          Share Your Epic Story 🌟
        </h1>

        <p className="text-center text-muted-foreground mt-2 text-xs max-w-xl mx-auto">
          Got a story to tell? Whether it&apos;s a wild adventure, a heartfelt
          moment, or a hilarious mishap, we want to hear it! Let&apos;s make
          your story legendary.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-3"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Story Title*</FormLabel>
                  <FormControl>
                    <Input placeholder="Story title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What&apos;s Your Story About?*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Give a brief overview of your story..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Give a snapshot of your story in a few sentences. This helps
                    readers understand what to expect.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Story Thumbnail*</FormLabel>
                  <FormControl>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <FormLabel
                        htmlFor="picture"
                        className="relative overflow-hidden h-40 w-52 border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center flex-col"
                      >
                        {thumbnailUrl ? (
                          <>
                            <Image
                              src={thumbnailUrl}
                              width={200}
                              height={200}
                              alt={form.getValues("title")}
                              className="h-40 w-52 object-contain bg-muted"
                            />
                            <X
                              size={"18"}
                              onClick={handleRemoveThumbnail}
                              className="absolute text-sm cursor-pointer bg-rose-600 right-1 top-1 rounded-full p-0.5"
                            />
                          </>
                        ) : (
                          <ImageUp size={"32"} />
                        )}
                      </FormLabel>
                      <Input
                        id="picture"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          if (file) {
                            setThumbnailUrl(URL.createObjectURL(file));
                          } else {
                            setThumbnailUrl(null);
                          }
                          form.setValue("thumbnail", file);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormDescription className="text-xs">
                    Choose a captivating image that represents your story. This
                    image will be displayed as the thumbnail for your story.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Story Content*</FormLabel>
                  <FormControl>
                    <ContentEditor
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Write the full content of your story here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publish"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ready to Go Live?*</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="publish-toggle"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-readonly
                      />
                      <FormLabel htmlFor="publish-toggle">Publish</FormLabel>
                    </div>
                  </FormControl>
                  <FormDescription className="text-xs">
                    Toggle this switch to make your story public. Make sure your
                    story is polished and ready for everyone to see!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Tags*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type a tag and press Enter"
                      onKeyDown={handleAddTag}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    <div className="flex flex-wrap mt-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2 cursor-pointer"
                          onClick={() => handleRemoveTag(tag)}
                        >
                          {tag} &times;
                        </span>
                      ))}
                    </div>
                    Add up to 6 tags to describe your story. Tags help readers
                    find stories that interest them.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CustomButton type="submit" heading="Submit" className="w-full" />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default PostStory;
