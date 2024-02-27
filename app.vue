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
        <Tabs default-value="account" class="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
    </div>
</template>
