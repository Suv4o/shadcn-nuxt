<template>
    <div class="container">
        <Select>
            <SelectTrigger class="focus:outline-red-700">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</template>
