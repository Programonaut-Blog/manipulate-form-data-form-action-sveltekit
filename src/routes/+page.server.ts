import type { Actions, PageServerLoad } from './$types';

export const actions: Actions = {
    update: async ({request}) => {
        const data = await request.formData();
        console.log(...data);
        
        
        // save the data to the database e.g. with pocketbase
        // const record = await pb.collection('donuts').update(data.get('id'), data);
        return { name: data.get('name') }
    }
};

export const load: PageServerLoad = async ({ params }) => {
    // load the data from the database e.g. with pocketbase
    // const record = await pb.collection('donuts').get(params.id);
    // return { donut: record };
    return { donut: {
        id: "vanille-donut",
        name: "Vanille Donut",
        description: "A donut with vanilla flavor",
        price: 1,
    }};
}