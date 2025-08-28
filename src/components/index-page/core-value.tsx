import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoreValue() {
  return (
    <section
      id="values"
      className="bg-gradient-to-br from-yellow-100 to-amber-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-yellow-900">
            Core Values – LAMP
          </h2>
          <p className="mt-2 text-yellow-700">Behavioral Health Focused</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              k: "L",
              t: "Leadership in Care",
              d: "Guiding residents toward stability, healthy routines, and positive choices.",
            },
            {
              k: "A",
              t: "Accountability",
              d: "Supporting residents in taking responsibility for their actions and well-being.",
            },
            {
              k: "M",
              t: "Mental & Emotional Growth",
              d: "Encouraging coping skills, personal development, and resilience.",
            },
            {
              k: "P",
              t: "Partnership",
              d: "Collaborating with families, guardians, caseworkers, and providers for holistic support.",
            },
          ].map((v) => (
            <Card
              key={v.t}
              className="border-yellow-200/50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <Badge className="rounded-full px-3 py-1 text-base bg-yellow-500 text-yellow-900 hover:bg-yellow-500">
                  {v.k}
                </Badge>
                <CardTitle className="text-lg text-yellow-900">{v.t}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-yellow-700">
                {v.d}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
