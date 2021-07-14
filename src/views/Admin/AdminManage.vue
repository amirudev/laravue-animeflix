<template>
    <table class="table-auto w-full border border-gray-500 text-center my-4">
        <thead class="bg-gray-800 border border-gray-500">
            <tr>
                <th class="py-3">Name</th>
                <th class="py-3">Role</th>
                <th class="py-3">Added By</th>
                <th class="py-3">Added At</th>
                <th class="py-3">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="hover:bg-gray-900">
                <td class="p-3">Wahyu Amirulloh</td>
                <td class="p-3">Admin</td>
                <td class="p-3">John Doe</td>
                <td class="p-3">2021/08/20 19:59</td>
                <td class="">
                    <a class="text-red-500 font-bold px-1" href="#">Delete</a>
                </td>
            </tr>
            <tr class="hover:bg-gray-900">
                <td class="p-3">Wahyu Amirulloh</td>
                <td class="p-3">Admin</td>
                <td class="p-3">John Doe</td>
                <td class="p-3">2021/08/20 19:59</td>
                <td class="">
                    <a class="text-red-500 font-bold px-1" href="#">Delete</a>
                </td>
            </tr>
            <tr class="hover:bg-gray-900">
                <td class="p-3">Wahyu Amirulloh</td>
                <td class="p-3">Admin</td>
                <td class="p-3">John Doe</td>
                <td class="p-3">2021/08/20 19:59</td>
                <td class="">
                    <a class="text-red-500 font-bold px-1" href="#">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="my-2">
        <h3 class="font-bold text-lg">Tambah Admin Baru</h3>
        <form action="">
            <div class="my-2">
                <label for="" class="font-bold text-md">Nama</label>
                <input type="text" class="w-full my-2 bg-gray-800 p-2 rounded">
            </div>
            <div class="my-2">
                <label for="" class="font-bold text-md">Role</label>
                <select name="" id="" class="w-full my-2 bg-gray-800 p-2 rounded">
                    <option value="">Moderator</option>
                    <option value="">Admin ( Semua Hak )</option>
                </select>
            </div>
            <div class="my-2 w-full flex justify-end">
                <button type="submit" class="bg-green-800 px-5 py-2 rounded text-right font-bold">Submit</button>
                <!-- <input type="submit" value="Submit" > -->
            </div>
        </form>
    </div>
</template>