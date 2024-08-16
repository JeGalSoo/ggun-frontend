'use server'

export async function allAdmins(): Promise<IAdmin[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/list`)
   
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IAdmin[] = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        // console.log("allAdmins!!!"+ JSON.stringify(data[0]))
        return data
    } catch (error) {
        console.log("allAdmins api err : " + error);
        return { status: 500 };
    }
}

export async function findAdminById(id: string): Promise<IAdmin | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/detail?id=${id}`)
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IAdmin = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }
        // console.log("findAdminById : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("findAdminById err : " + error);
        return { status: 500 };
    }
}

export async function deleteAdmin(id: string): Promise<IAdmin | { status: number }> {
    // const idd = parseInt(id)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/delete?id=${id}`)
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IAdmin = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }
        console.log("deleteAdmin : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("deleteAdmin api err : " + error);
        return { status: 500 };
    }
}

export async function updateAdmin(admin: IAdmin): Promise<IAdmin | { status: number }> {
    // console.log("updateAdmin : " + JSON.stringify(admin))
    const { id, username, password, name, number, department, email, phone } = admin || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/modify`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                username: username,
                password: password,
                name: name,
                number:number,
                department:department,
                email: email,
                phone: phone
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IAdmin = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }
        // console.log("updateAdmin : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("updateAdmin err : " + error);
        return { status: 500 };
    }
}


// export const joinAdminAPI = async (admin: IAdmin) => {
//     try {
//         const response = await instance().post('/admins/save', admin)
//         console.log("JoinAdminAPI : " + response)
//         return response
//     } catch (error) {
//         console.log("JoinAdminAPI EERR!!!" + error)
//         return error
//     }
// }