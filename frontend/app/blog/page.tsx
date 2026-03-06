import Link from "next/link";
import { PageWrapper } from "@/components/layout/page-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getAllTags } from "@/lib/blog";

type Props = {
  searchParams: Promise<{
    tag?: string;
  }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;

  const posts = getAllPosts();
  const tags = getAllTags();

  const selectedTag = resolvedSearchParams?.tag;

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags?.includes(selectedTag))
    : posts;

  return (
    <PageWrapper>
      <div className="space-y-16">
        <div className="space-y-6">
          <h1 className="h1">Blog</h1>
          <p className="p-muted max-w-2xl">
            Technical writing on software architecture, backend systems, and engineering clarity.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/blog">
            <Badge
              variant={!selectedTag ? "default" : "outline"}
              className="cursor-pointer"
            >
              All
            </Badge>
          </Link>

          {tags.map((tag) => (
            <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
              <Badge
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <span>
                  {post.date} • {post.readingTime}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-foreground transition"
                >
                  Read →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}