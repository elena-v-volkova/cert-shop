export default async function sendDataToServer(data) {
    const url = new URL('https://sycret.ru/service/api/api');
    url.searchParams.append("ApiKey", "011ba11bdcad4fa396660c2ec447ef14");
    url.searchParams.append("MethodName", "OSSale");

    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));

    const response = await fetch(url, {
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
    }

    return response.json();
};



export async function fetchData() {
    const url = new URL('https://sycret.ru/service/api/api');
    url.searchParams.append("ApiKey", "011ba11bdcad4fa396660c2ec447ef14");
    url.searchParams.append("MethodName", "OSGetGoodList");

    const response = await fetch(url, {
        method: 'GET',
    });

    const result = await response.json();

    return result.data;
}