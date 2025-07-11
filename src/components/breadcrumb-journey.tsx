import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Journey } from "@/types/journey";
import { Badge } from "./ui/badge";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type BreadcrumbJourneyProps = {
  journeys: Journey[];
};

export function BreadcrumbJourney({ journeys }: BreadcrumbJourneyProps) {
  return (
    <>
      {journeys.map((journey) => {
        const steps = journey.journey;
        const hasMiddle = steps.length > 3;
        const first = steps[0];
        const second = steps[1];
        const last = steps[steps.length - 1];
        const middle = hasMiddle ? steps.slice(2, steps.length - 1) : [];
        return (
          <Breadcrumb key={journey.sessionId}>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Badge variant={"outline"}>{first}</Badge>
              </BreadcrumbItem>
              {steps.length > 1 && <BreadcrumbSeparator />}
              {steps.length > 1 && (
                <BreadcrumbItem>
                  <Badge variant={"outline"}>{second}</Badge>
                </BreadcrumbItem>
              )}
              {hasMiddle && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Badge variant={"outline"} className="cursor-pointer">
                          ...
                        </Badge>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {middle.map((step, idx) => (
                          <DropdownMenuItem key={idx}>{step}</DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                </>
              )}
              {steps.length > 2 && <BreadcrumbSeparator />}
              {steps.length > 2 && (
                <BreadcrumbItem>
                  <Badge variant={"outline"}>{last}</Badge>
                </BreadcrumbItem>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        );
      })}
    </>
  );
}
