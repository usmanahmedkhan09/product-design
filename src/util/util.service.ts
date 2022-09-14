

// class UtilService
// {
//     getImageUrl = (url: string, directory: string | null) =>
//     {

//         try
//         {
//             var images = require.context(
//                 "../assets/images",
//                 true,
//             );
//             var imageUrl = directory ? `./${directory}/${url}` : `./${url}`;
//             return images(imageUrl);
//         } catch (e)
//         {
//             console.log(e)
//             return '';
//         }
//     }
// }

// export default new UtilService()

export const requireImage = (link: any) =>
{
    return require(`@/assets/images/${link}`);
}