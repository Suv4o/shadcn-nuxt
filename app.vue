<script setup lang="ts">
const defaultValue = "item-1";

const accordionItems = [
    { value: "item-1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
    {
        value: "item-2",
        title: "Is it unstyled?",
        content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
    },
    {
        value: "item-3",
        title: "Can it be animated?",
        content: "Yes! You can use the transition prop to configure the animation.",
    },
];
</script>

<template>
    <div class="container">
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead class="w-[100px]"> Invoice </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead class="text-right"> Amount </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell class="font-medium"> INV001 </TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell class="text-right"> $250.00 </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Select>
            <SelectTrigger class="focus:outline-red-700">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent class="bg-red-500">
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
                <AccordionTrigger>{{ item.title }}</AccordionTrigger>
                <AccordionContent>
                    {{ item.content }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <Switch />
        <Tabs default-value="account" class="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <Carousel
            class="relative w-full max-w-sm mx-auto"
            :opts="{
                align: 'start',
            }"
        >
            <CarouselContent>
                <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3">
                    <div class="p-1">
                        <Card>
                            <CardContent class="flex aspect-square items-center justify-center p-6">
                                <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
</template>
