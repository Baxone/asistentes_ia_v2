/**
 * Convierte una función con callback (err, result) en una que devuelve una Promesa.
 * @param {Function} fn - Función con callback como último argumento
 * @returns {Function} Función que devuelve una Promesa
 */
const promisify = (fn) => {
    return (...args) =>
        new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
};

const get_user_async = promisify(getUser);
const get_orders_async = promisify(getOrders);
const get_order_details_async = promisify(getOrderDetails);

/**
 * Obtiene un usuario con sus pedidos y detalles del primer pedido.
 * @param {string|number} user_id - ID del usuario
 * @returns {Promise<{user: object, orders: array, details: object}>} Usuario, pedidos y detalles
 */
const get_user_with_orders = async (user_id) => {
    const user = await get_user_async(user_id);
    const orders = await get_orders_async(user.id);
    const details = await get_order_details_async(orders[0].id);
    return { user, orders, details };
};