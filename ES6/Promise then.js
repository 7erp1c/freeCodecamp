//Обещания наиболее полезны, когда в вашем коде есть процесс, который занимает неизвестное
//количество времени (т. е. что-то асинхронное), часто это запрос к серверу. Когда вы делаете запрос на сервер,
//он занимает определенное время, и после его завершения вы обычно хотите что-то сделать с ответом от сервера.
//Этого можно добиться с помощью метода then.

// Promise.prototype.then(onFulfilled, onRejected)

/* Метод then планирует функции обратного вызова для окончательного завершения обещания - выполнения или отклонения.
Один из обработчиков onFulfilled и onRejected будет выполнен для обработки выполнения или отклонения текущего
обещания.
Когда обещание выполнено с разрешением, вызывается обработчик onFulfilled.

myPromise.then(result => {
});

result зависит от аргумента, переданного методу resolve
*/
//Пример:
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest.then(result => {
    console.log(result);
});