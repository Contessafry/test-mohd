import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/tabs";
import { FilterRow } from "./partials/FilterRow";

export function SectionProducts() {
  return (
    <Tabs defaultValue={"proposed"}>
      <div className="flex">
        <TabsList className="border-b flex w-fit h-12  gap-8 justify-start rounded-none bg-transparent p-0 ">
          <TabsTrigger variant="simple" value="proposed" className="ml-10">
            Proposed items
          </TabsTrigger>
          <TabsTrigger variant="simple" value="approved">
            Approved
          </TabsTrigger>
          <TabsTrigger value="ordered" variant="simple">
            Ordered
          </TabsTrigger>
          <TabsTrigger value="delivered" variant="simple">
            Delivered
          </TabsTrigger>
          <TabsTrigger value="invoiced" variant="simple">
            Invoiced
          </TabsTrigger>
        </TabsList>
        <div className="w-full border-b" />
      </div>
      <FilterRow />
      {/* Tab content */}
      <TabsContent value="proposed" className="p-6">
        <h2 className="text-xl font-medium mb-4">Proposed Items</h2>
        <p className="text-[#6a6a69]">Items that have been proposed to the client but not yet approved.</p>
      </TabsContent>

      <TabsContent value="approved" className="p-6">
        <h2 className="text-xl font-medium mb-4">Approved Items</h2>
        <p className="text-[#6a6a69]">Items that have been approved by the client but not yet ordered.</p>
      </TabsContent>

      <TabsContent value="ordered" className="p-6">
        <h2 className="text-xl font-medium mb-4">Ordered Items</h2>
        <p className="text-[#6a6a69]">Items that have been ordered but not yet delivered.</p>
      </TabsContent>

      <TabsContent value="delivered" className="p-6">
        <h2 className="text-xl font-medium mb-4">Delivered Items</h2>
        <p className="text-[#6a6a69]">Items that have been delivered but not yet invoiced.</p>
      </TabsContent>

      <TabsContent value="invoiced" className="p-6">
        <h2 className="text-xl font-medium mb-4">Invoiced Items</h2>
        <p className="text-[#6a6a69]">Items that have been invoiced.</p>
      </TabsContent>
    </Tabs>
  );
}
