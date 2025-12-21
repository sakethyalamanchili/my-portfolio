// // "use client";

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Camera,
// //   X,
// //   Download,
// //   Heart,
// //   MapPin,
// //   Calendar,
// //   Aperture,
// //   ZoomIn,
// // } from "lucide-react";

// // interface Photo {
// //   id: string;
// //   title: string;
// //   imageUrl: string;
// //   location?: string;
// //   date?: string;
// //   camera?: string;
// //   description?: string;
// //   category: string;
// //   orientation?: "landscape" | "portrait" | "square"; // Optional: you can specify or let it auto-detect
// // }

// // interface PhotographyProps {
// //   theme: "light" | "dark";
// // }

// // // Sample photos - Replace with your actual photo URLs
// // // Mix of landscape and portrait orientations
// // const samplePhotos: Photo[] = [
// //   {
// //     id: "1",
// //     title: "Lakeside Muscovy Portrait",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0993_foiewg.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A low-angle, cinematic portrait of a Muscovy duck standing on grass, framed against a lake fountain and overcast sky.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "2",
// //     title: "Lakeside Muscovy Duo",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1108_xhikjl.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A wide, cinematic shot of two Muscovy ducks standing on a grassy bank, looking out over a rainy lake with a clubhouse in the distance, framed by dark foliage on the right.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "3",
// //     title: "Curious Muscovy Gaze",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0978_tztmsm.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A close-up, cinematic portrait of a Muscovy duck on a grassy bank, gazing inquisitively into the lens with a soft, blurred residential backdrop.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "5",
// //     title: "Twilight Traffic Motion",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_1247_kuowya.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic long-exposure landscape capturing the motion blur of passing cars against a backdrop of a warm-lit building and palm trees during blue hour.",
// //     category: "Urban",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "6",
// //     title: "Inquisitive Muscovy Profile",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_0972_zlhjck.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic, low-angle shot of a Muscovy duck stretching its neck forward to investigate the grass, set against a blurred background of palm trees and apartments.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "7",
// //     title: "Fading Floral Melancholy",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1511_avz6vn.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A moody, cinematic top-down shot of fading white roses resting on a bed of dark green clover, capturing the delicate textures of withered petals in low light.",
// //     category: "Nature",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "8",
// //     title: "Shadowed Solitude on Green",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272701/IMG_1811_c1cuo5.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic, high-angle shot of a Muscovy duck traversing a vibrant green lawn, with high-contrast lighting casting deep shadows that highlight the texture of the grass.",
// //     category: "Wildlife",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "9",
// //     title: "Geometric Urban Glow",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0283_tkxvrf.jpg",
// //     location: "Boca Raton, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A minimalist, cinematic shot of a modern street lamp with glowing geometric fixtures, contrasting against the rhythmic grid of a grey building facade at twilight.",
// //     category: "Urban",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "10",
// //     title: "Grazing Muscovy Close-Up",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_2081_it9gfz.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A candid, cinematic profile shot of a Muscovy duck grazing in the grass with its beak open, framed against a soft, blurred background of a tiled roof and sky.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "11",
// //     title: "Skyward Iguana Sentry",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0247_dcw2ah.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic low-angle shot of a green iguana perched high on a tiled roof corner, framed by palm fronds and white gutters against a cloudy blue sky.",
// //     category: "Wildlife",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "12",
// //     title: "Lakeside Ibis Stroll",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_1776_patk8p.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic wide shot of an American White Ibis standing on a vibrant green bank, its white plumage contrasting sharply against the deep blue water of the lake.",
// //     category: "Wildlife",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "13",
// //     title: "Solitary Night Light",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0399_eng4ft.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A minimalist, cinematic shot of a single street lamp glowing against an absolute black void, highlighting the isolation and calm of the night.",
// //     category: "Urban",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "14",
// //     title: "Mail Center Solitude",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0252_kxnh8s.jpg",
// //     location: "Citation Club Apartments",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic night shot capturing a solitary figure silhouetted against the warm, inviting glow of an outdoor mail center, framed by deep shadows and architectural pillars.",
// //     category: "Urban",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "15",
// //     title: "Flight Over Dark Waters",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_1869_cfjiwq.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic action shot of a white bird taking flight over dark, rippling lake water, its wings spread wide against the deep blue contrast and green grassy bank.",
// //     category: "Wildlife",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "16",
// //     title: "Rain-Soaked Muscovy Lookback",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_1080_jczzts.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic portrait of a Muscovy duck standing in the rain on a grassy bank, looking back over its shoulder with water droplets clinging to its iridescent feathers.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "17",
// //     title: "Stone Perch Sentinel",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_0912_ogxzfz.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic close-up of a brown lizard resting on a weathered concrete paver, its textured scales detailed against a soft, blurred background of garden grass.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "18",
// //     title: "Nocturnal Fender Lines",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3884_zcbo9q.jpg",
// //     location: "Lakeworth, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic, high-angle detail shot of a white car's front fender and alloy wheel, capturing the sleek body curves under artificial night lighting.",
// //     category: "Automotive",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "19",
// //     title: "High Altitude Howdy",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_4017_jfvmqv.jpg",
// //     location: "In Flight",
// //     date: "2025",
// //     camera: "iPhone 13 Pro",
// //     description: "A cinematic vertical shot from an airplane window, capturing the winglet silhouette against a vibrant orange sunset horizon and a sea of clouds below.",
// //     category: "Travel",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "20",
// //     title: "Twilight Transit Motion",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3890_v5e2pj.jpg",
// //     location: "Roadside",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic, abstract motion blur shot of vehicle lights streaking in red and gold horizontal lines against a deep twilight sky, capturing the energy of travel.",
// //     category: "Abstract",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "21",
// //     title: "Grainy Blue Hour Lamp",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3942_nigpkb.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm yellow against a deep, grainy blue twilight sky, emphasizing negative space.",
// //     category: "Urban",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "22",
// //     title: "Rain-Kissed Side View",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3919_l2unr2.jpg",
// //     location: "Car Interior",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A moody, cinematic vertical shot through a rain-streaked car window, focusing on the intricate pattern of water droplets with a blurred white side mirror in the background.",
// //     category: "Abstract",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "23",
// //     title: "Sleek Fender Profile",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3885_zzm2b8.jpg",
// //     location: "Lakeworth, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic, high-angle close-up of a white car's front profile, showcasing the sleek fender lines and alloy wheel details against the texture of a paved surface at night.",
// //     category: "Automotive",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "24",
// //     title: "Blue Hour Minimalist Lamp",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275865/IMG_3943_g2gmok.jpg",
// //     location: "Delray Beach",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm against a clean, deep blue twilight sky, emphasizing negative space and simplicity.",
// //     category: "Urban",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "25",
// //     title: "Monochrome Roofline Geometry",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276528/IMG_3899_kvtpah.jpg",
// //     location: "Delray Beach",
// //     date: "2025",
// //     camera: "iPhone 13 Pro",
// //     description: "A cinematic, black and white vertical shot capturing the sharp geometric angles of a tiled roof against a moody, overcast sky, emphasizing architectural texture.",
// //     category: "Architecture",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "26",
// //     title: "Tropical Tower Skyline",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/BF5AAB63-87A5-4E20-B814-CF020502C5A5_jkc8vr.jpg",
// //     location: "Lakeworth, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic landscape shot of a tall palm tree swaying against a deep teal sky, framing a beige architectural tower and billowing white clouds in the distance.",
// //     category: "Urban",
// //     orientation: "landscape"
// //   },
// //   {
// //     id: "27",
// //     title: "Rustic Muscovy Profile",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3895_rtvufc.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic, vertical close-up profile of a Muscovy duck, capturing the details of its beak and red facial caruncles against a textured background of dry grass.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "28",
// //     title: "Iridescent Muscovy Interaction",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3893_dgxnjn.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic vertical shot capturing a social moment between Muscovy ducks on a grassy bank, highlighting the vibrant iridescent purple and green sheen on the wings of the central bird.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "29",
// //     title: "Lakeside Trio Gathering",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/IMG_3897_eipxaj.jpg",
// //     location: "Delray Beach, Florida",
// //     date: "2025",
// //     camera: "Canon EOS R50",
// //     description: "A cinematic high-angle shot of three ducks standing on a vibrant green grassy bank next to the water, showcasing their varied brown and speckled plumage against the natural texture of the shoreline.",
// //     category: "Wildlife",
// //     orientation: "portrait"
// //   },
// //   {
// //     id: "30",
// //     title: "Tropical Twilight Silhouette",
// //     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/62E4AAE9-57DA-4BA1-9952-8E37306F8FA4_o05pg0.jpg",
// //     location: "Lakeworth, Florida",
// //     date: "2025",
// //     camera: "iPhone 13 Pro",
// //     description: "A cinematic landscape shot of a tall palm tree silhouette centered against a gradient sky transitioning from deep blue to warm sunset orange.",
// //     category: "Nature",
// //     orientation: "landscape"
// //   }
// // ];

// // const categories = ["All", "Urban", "Landscape", "Architecture", "Portrait", "Nature"];

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.1 }
// //   }
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, scale: 0.8 },
// //   visible: {
// //     opacity: 1,
// //     scale: 1,
// //     transition: { type: "spring", stiffness: 100 }
// //   }
// // };

// // export default function Photography({ theme }: PhotographyProps) {
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
// //   const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());

// //   const filteredPhotos = selectedCategory === "All"
// //     ? samplePhotos
// //     : samplePhotos.filter(photo => photo.category === selectedCategory);

// //   const toggleLike = (photoId: string) => {
// //     setLikedPhotos(prev => {
// //       const newLikes = new Set(prev);
// //       if (newLikes.has(photoId)) {
// //         newLikes.delete(photoId);
// //       } else {
// //         newLikes.add(photoId);
// //       }
// //       return newLikes;
// //     });
// //   };

// //   return (
// //     <Card
// //       className={`backdrop-blur-sm ${
// //         theme === "dark"
// //           ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
// //           : "bg-white/80 border-[#E5E7EB] shadow-xl"
// //       }`}
// //     >
// //       <CardHeader>
// //         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
// //           <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
// //             <Camera className="w-7 h-7 text-purple-500" />
// //             <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
// //               Photography Portfolio
// //             </span>
// //           </CardTitle>

// //           {/* Category Filter */}
// //           <div className="flex flex-wrap gap-2">
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 onClick={() => setSelectedCategory(category)}
// //                 className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
// //                   selectedCategory === category
// //                     ? theme === "dark"
// //                       ? "bg-purple-500 text-white"
// //                       : "bg-purple-500 text-white"
// //                     : theme === "dark"
// //                     ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D] hover:text-white"
// //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
// //                 }`}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Info Banner */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className={`mt-4 p-4 rounded-lg border ${
// //             theme === "dark"
// //               ? "bg-purple-500/10 border-purple-500/30"
// //               : "bg-purple-50 border-purple-200"
// //           }`}
// //         >
// //           <p className={`text-sm ${
// //             theme === "dark" ? "text-purple-200" : "text-purple-900"
// //           }`}>
// //             <Aperture className="w-4 h-4 inline mr-2" />
// //             Capturing moments and telling stories through the lens. Photography is my passion for exploring perspectives and preserving memories.
// //           </p>
// //         </motion.div>
// //       </CardHeader>

// //       <CardContent>
// //         {/* Masonry-style Photo Grid - Handles mixed orientations */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //           className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
// //         >
// //           {filteredPhotos.map((photo, index) => (
// //             <motion.div
// //               key={photo.id}
// //               variants={itemVariants}
// //               whileHover={{ y: -8 }}
// //               className="group relative cursor-pointer break-inside-avoid mb-6"
// //               onClick={() => setSelectedPhoto(photo)}
// //             >
// //               <div className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
// //                 theme === "dark"
// //                   ? "border-[#30363D] group-hover:border-purple-500/50"
// //                   : "border-[#E5E7EB] group-hover:border-purple-400/50"
// //               } shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/20`}>
// //                 {/* Image - Natural aspect ratio */}
// //                 <div className="relative overflow-hidden bg-gray-900">
// //                   <img
// //                     src={photo.imageUrl}
// //                     alt={photo.title}
// //                     className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
// //                     loading="lazy"
// //                   />
                  
// //                   {/* Overlay */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                     <div className="absolute bottom-0 left-0 right-0 p-4">
// //                       <h3 className="text-white font-semibold text-base md:text-lg mb-1">
// //                         {photo.title}
// //                       </h3>
// //                       {photo.location && (
// //                         <p className="text-white/80 text-xs md:text-sm flex items-center gap-1">
// //                           <MapPin className="w-3 h-3" />
// //                           {photo.location}
// //                         </p>
// //                       )}
// //                     </div>
                    
// //                     {/* Zoom Icon */}
// //                     <div className="absolute top-4 right-4">
// //                       <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
// //                         <ZoomIn className="w-5 h-5 text-white" />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Quick Actions */}
// //                 <div className="absolute top-4 left-4 flex gap-2">
// //                   <motion.button
// //                     whileHover={{ scale: 1.1 }}
// //                     whileTap={{ scale: 0.9 }}
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       toggleLike(photo.id);
// //                     }}
// //                     className={`p-2 rounded-full backdrop-blur-md transition-colors ${
// //                       likedPhotos.has(photo.id)
// //                         ? "bg-red-500 text-white"
// //                         : "bg-white/20 text-white hover:bg-white/30"
// //                     }`}
// //                   >
// //                     <Heart className={`w-4 h-4 ${likedPhotos.has(photo.id) ? "fill-current" : ""}`} />
// //                   </motion.button>
// //                 </div>

// //                 {/* Category Badge */}
// //                 <div className="absolute bottom-4 right-4">
// //                   <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
// //                     theme === "dark"
// //                       ? "bg-white/20 text-white"
// //                       : "bg-black/20 text-white"
// //                   }`}>
// //                     {photo.category}
// //                   </span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Empty State */}
// //         {filteredPhotos.length === 0 && (
// //           <div className="text-center py-16">
// //             <Camera className={`w-16 h-16 mx-auto mb-4 ${
// //               theme === "dark" ? "text-gray-600" : "text-gray-400"
// //             }`} />
// //             <p className={`text-lg ${
// //               theme === "dark" ? "text-gray-400" : "text-gray-600"
// //             }`}>
// //               No photos in this category yet.
// //             </p>
// //           </div>
// //         )}

// //         {/* Stats */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.5 }}
// //           className={`mt-8 p-6 rounded-xl border ${
// //             theme === "dark"
// //               ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30"
// //               : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300/30"
// //           }`}
// //         >
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
// //             <div>
// //               <div className={`text-2xl md:text-3xl font-bold ${
// //                 theme === "dark" ? "text-white" : "text-gray-900"
// //               }`}>
// //                 {samplePhotos.length}+
// //               </div>
// //               <div className={`text-sm ${
// //                 theme === "dark" ? "text-gray-400" : "text-gray-600"
// //               }`}>
// //                 Photos
// //               </div>
// //             </div>
// //             <div>
// //               <div className={`text-2xl md:text-3xl font-bold ${
// //                 theme === "dark" ? "text-white" : "text-gray-900"
// //               }`}>
// //                 {categories.length - 1}
// //               </div>
// //               <div className={`text-sm ${
// //                 theme === "dark" ? "text-gray-400" : "text-gray-600"
// //               }`}>
// //                 Categories
// //               </div>
// //             </div>
// //             <div>
// //               <div className={`text-2xl md:text-3xl font-bold ${
// //                 theme === "dark" ? "text-white" : "text-gray-900"
// //               }`}>
// //                 {likedPhotos.size}
// //               </div>
// //               <div className={`text-sm ${
// //                 theme === "dark" ? "text-gray-400" : "text-gray-600"
// //               }`}>
// //                 Liked
// //               </div>
// //             </div>
// //             <div>
// //               <div className={`text-2xl md:text-3xl font-bold ${
// //                 theme === "dark" ? "text-white" : "text-gray-900"
// //               }`}>
// //                 Mixed
// //               </div>
// //               <div className={`text-sm ${
// //                 theme === "dark" ? "text-gray-400" : "text-gray-600"
// //               }`}>
// //                 Orientations
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </CardContent>

// //       {/* Lightbox Modal - Handles any aspect ratio */}
// //       <AnimatePresence>
// //         {selectedPhoto && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setSelectedPhoto(null)}
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
// //           >
// //             <motion.div
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.8, opacity: 0 }}
// //               onClick={(e) => e.stopPropagation()}
// //               className={`relative max-w-7xl w-full max-h-[95vh] rounded-2xl overflow-hidden ${
// //                 theme === "dark" ? "bg-[#161B22]" : "bg-white"
// //               } shadow-2xl flex flex-col`}
// //             >
// //               {/* Close Button */}
// //               <button
// //                 onClick={() => setSelectedPhoto(null)}
// //                 className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
// //               >
// //                 <X className="w-6 h-6" />
// //               </button>

// //               {/* Image Container - Flexible height */}
// //               <div className="relative flex-1 flex items-center justify-center bg-black overflow-auto">
// //                 <img
// //                   src={selectedPhoto.imageUrl}
// //                   alt={selectedPhoto.title}
// //                   className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
// //                 />
// //               </div>

// //               {/* Details */}
// //               <div className="p-6 flex-shrink-0">
// //                 <h2 className={`text-2xl font-bold mb-3 ${
// //                   theme === "dark" ? "text-white" : "text-gray-900"
// //                 }`}>
// //                   {selectedPhoto.title}
// //                 </h2>
                
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// //                   {selectedPhoto.location && (
// //                     <div className="flex items-center gap-2">
// //                       <MapPin className="w-4 h-4 text-purple-500" />
// //                       <span className={`text-sm ${
// //                         theme === "dark" ? "text-gray-400" : "text-gray-600"
// //                       }`}>
// //                         {selectedPhoto.location}
// //                       </span>
// //                     </div>
// //                   )}
// //                   {selectedPhoto.date && (
// //                     <div className="flex items-center gap-2">
// //                       <Calendar className="w-4 h-4 text-purple-500" />
// //                       <span className={`text-sm ${
// //                         theme === "dark" ? "text-gray-400" : "text-gray-600"
// //                       }`}>
// //                         {selectedPhoto.date}
// //                       </span>
// //                     </div>
// //                   )}
// //                   {selectedPhoto.camera && (
// //                     <div className="flex items-center gap-2">
// //                       <Camera className="w-4 h-4 text-purple-500" />
// //                       <span className={`text-sm ${
// //                         theme === "dark" ? "text-gray-400" : "text-gray-600"
// //                       }`}>
// //                         {selectedPhoto.camera}
// //                       </span>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {selectedPhoto.description && (
// //                   <p className={`text-sm mb-4 ${
// //                     theme === "dark" ? "text-gray-300" : "text-gray-700"
// //                   }`}>
// //                     {selectedPhoto.description}
// //                   </p>
// //                 )}

// //                 <div className="flex gap-3">
// //                   <Button
// //                     variant="outline"
// //                     className="flex-1"
// //                     onClick={() => toggleLike(selectedPhoto.id)}
// //                   >
// //                     <Heart className={`w-4 h-4 mr-2 ${
// //                       likedPhotos.has(selectedPhoto.id) ? "fill-current text-red-500" : ""
// //                     }`} />
// //                     {likedPhotos.has(selectedPhoto.id) ? "Liked" : "Like"}
// //                   </Button>
// //                   <Button
// //                     variant="default"
// //                     className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500"
// //                     asChild
// //                   >
// //                     <a href={selectedPhoto.imageUrl} download target="_blank" rel="noopener noreferrer">
// //                       <Download className="w-4 h-4 mr-2" />
// //                       Download
// //                     </a>
// //                   </Button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </Card>
// //   );
// // }


// "use client";

// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Camera,
//   X,
//   Download,
//   Heart,
//   MapPin,
//   Calendar,
//   Aperture,
//   ZoomIn,
//   ChevronLeft,
//   ChevronRight,
//   SortAsc,
//   Grid3x3,
//   Rows3,
// } from "lucide-react";

// interface Photo {
//   id: string;
//   title: string;
//   imageUrl: string;
//   location?: string;
//   date?: string;
//   camera?: string;
//   description?: string;
//   category: string;
//   orientation?: "landscape" | "portrait" | "square";
//   featured?: boolean; // Mark special photos
// }

// interface PhotographyProps {
//   theme: "light" | "dark";
// }

// // ==========================================
// // 📸 YOUR PHOTOS - Add new photos here!
// // ==========================================
// const myPhotos: Photo[] = [
//   {
//     id: "1",
//     title: "Lakeside Muscovy Portrait",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0993_foiewg.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A low-angle, cinematic portrait of a Muscovy duck standing on grass, framed against a lake fountain and overcast sky.",
//     category: "Wildlife",
//     orientation: "portrait",
//     featured: true
//   },
//   {
//     id: "2",
//     title: "Lakeside Muscovy Duo",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1108_xhikjl.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A wide, cinematic shot of two Muscovy ducks standing on a grassy bank, looking out over a rainy lake with a clubhouse in the distance, framed by dark foliage on the right.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "3",
//     title: "Curious Muscovy Gaze",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0978_tztmsm.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A close-up, cinematic portrait of a Muscovy duck on a grassy bank, gazing inquisitively into the lens with a soft, blurred residential backdrop.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "5",
//     title: "Twilight Traffic Motion",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_1247_kuowya.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic long-exposure landscape capturing the motion blur of passing cars against a backdrop of a warm-lit building and palm trees during blue hour.",
//     category: "Urban",
//     orientation: "landscape",
//     featured: true
//   },
//   {
//     id: "6",
//     title: "Inquisitive Muscovy Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_0972_zlhjck.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, low-angle shot of a Muscovy duck stretching its neck forward to investigate the grass, set against a blurred background of palm trees and apartments.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "7",
//     title: "Fading Floral Melancholy",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1511_avz6vn.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A moody, cinematic top-down shot of fading white roses resting on a bed of dark green clover, capturing the delicate textures of withered petals in low light.",
//     category: "Nature",
//     orientation: "landscape"
//   },
//   {
//     id: "8",
//     title: "Shadowed Solitude on Green",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272701/IMG_1811_c1cuo5.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle shot of a Muscovy duck traversing a vibrant green lawn, with high-contrast lighting casting deep shadows that highlight the texture of the grass.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "9",
//     title: "Geometric Urban Glow",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0283_tkxvrf.jpg",
//     location: "Boca Raton, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic shot of a modern street lamp with glowing geometric fixtures, contrasting against the rhythmic grid of a grey building facade at twilight.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "10",
//     title: "Grazing Muscovy Close-Up",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_2081_it9gfz.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A candid, cinematic profile shot of a Muscovy duck grazing in the grass with its beak open, framed against a soft, blurred background of a tiled roof and sky.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "11",
//     title: "Skyward Iguana Sentry",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0247_dcw2ah.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic low-angle shot of a green iguana perched high on a tiled roof corner, framed by palm fronds and white gutters against a cloudy blue sky.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "12",
//     title: "Lakeside Ibis Stroll",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_1776_patk8p.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic wide shot of an American White Ibis standing on a vibrant green bank, its white plumage contrasting sharply against the deep blue water of the lake.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "13",
//     title: "Solitary Night Light",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0399_eng4ft.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic shot of a single street lamp glowing against an absolute black void, highlighting the isolation and calm of the night.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "14",
//     title: "Mail Center Solitude",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0252_kxnh8s.jpg",
//     location: "Citation Club Apartments",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic night shot capturing a solitary figure silhouetted against the warm, inviting glow of an outdoor mail center, framed by deep shadows and architectural pillars.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "15",
//     title: "Flight Over Dark Waters",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_1869_cfjiwq.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic action shot of a white bird taking flight over dark, rippling lake water, its wings spread wide against the deep blue contrast and green grassy bank.",
//     category: "Wildlife",
//     orientation: "landscape",
//     featured: true
//   },
//   {
//     id: "16",
//     title: "Rain-Soaked Muscovy Lookback",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_1080_jczzts.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic portrait of a Muscovy duck standing in the rain on a grassy bank, looking back over its shoulder with water droplets clinging to its iridescent feathers.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "17",
//     title: "Stone Perch Sentinel",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_0912_ogxzfz.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic close-up of a brown lizard resting on a weathered concrete paver, its textured scales detailed against a soft, blurred background of garden grass.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "18",
//     title: "Nocturnal Fender Lines",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3884_zcbo9q.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle detail shot of a white car's front fender and alloy wheel, capturing the sleek body curves under artificial night lighting.",
//     category: "Automotive",
//     orientation: "portrait"
//   },
//   {
//     id: "19",
//     title: "High Altitude Howdy",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_4017_jfvmqv.jpg",
//     location: "In Flight",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic vertical shot from an airplane window, capturing the winglet silhouette against a vibrant orange sunset horizon and a sea of clouds below.",
//     category: "Travel",
//     orientation: "portrait"
//   },
//   {
//     id: "20",
//     title: "Twilight Transit Motion",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3890_v5e2pj.jpg",
//     location: "Roadside",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, abstract motion blur shot of vehicle lights streaking in red and gold horizontal lines against a deep twilight sky, capturing the energy of travel.",
//     category: "Abstract",
//     orientation: "portrait"
//   },
//   {
//     id: "21",
//     title: "Grainy Blue Hour Lamp",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3942_nigpkb.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm yellow against a deep, grainy blue twilight sky, emphasizing negative space.",
//     category: "Urban",
//     orientation: "portrait"
//   },
//   {
//     id: "22",
//     title: "Rain-Kissed Side View",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3919_l2unr2.jpg",
//     location: "Car Interior",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A moody, cinematic vertical shot through a rain-streaked car window, focusing on the intricate pattern of water droplets with a blurred white side mirror in the background.",
//     category: "Abstract",
//     orientation: "portrait"
//   },
//   {
//     id: "23",
//     title: "Sleek Fender Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3885_zzm2b8.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle close-up of a white car's front profile, showcasing the sleek fender lines and alloy wheel details against the texture of a paved surface at night.",
//     category: "Automotive",
//     orientation: "portrait"
//   },
//   {
//     id: "24",
//     title: "Blue Hour Minimalist Lamp",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275865/IMG_3943_g2gmok.jpg",
//     location: "Delray Beach",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm against a clean, deep blue twilight sky, emphasizing negative space and simplicity.",
//     category: "Urban",
//     orientation: "portrait"
//   },
//   {
//     id: "25",
//     title: "Monochrome Roofline Geometry",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276528/IMG_3899_kvtpah.jpg",
//     location: "Delray Beach",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic, black and white vertical shot capturing the sharp geometric angles of a tiled roof against a moody, overcast sky, emphasizing architectural texture.",
//     category: "Architecture",
//     orientation: "portrait"
//   },
//   {
//     id: "26",
//     title: "Tropical Tower Skyline",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/BF5AAB63-87A5-4E20-B814-CF020502C5A5_jkc8vr.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic landscape shot of a tall palm tree swaying against a deep teal sky, framing a beige architectural tower and billowing white clouds in the distance.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "27",
//     title: "Rustic Muscovy Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3895_rtvufc.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, vertical close-up profile of a Muscovy duck, capturing the details of its beak and red facial caruncles against a textured background of dry grass.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "28",
//     title: "Iridescent Muscovy Interaction",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3893_dgxnjn.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic vertical shot capturing a social moment between Muscovy ducks on a grassy bank, highlighting the vibrant iridescent purple and green sheen on the wings of the central bird.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "29",
//     title: "Lakeside Trio Gathering",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/IMG_3897_eipxaj.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic high-angle shot of three ducks standing on a vibrant green grassy bank next to the water, showcasing their varied brown and speckled plumage against the natural texture of the shoreline.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "30",
//     title: "Tropical Twilight Silhouette",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/62E4AAE9-57DA-4BA1-9952-8E37306F8FA4_o05pg0.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic landscape shot of a tall palm tree silhouette centered against a gradient sky transitioning from deep blue to warm sunset orange.",
//     category: "Nature",
//     orientation: "landscape"
//   }
// ];

// // Auto-generate categories from photos
// const categories = ["All", ...Array.from(new Set(myPhotos.map(p => p.category))).sort()];

// const photosPerPage = 12;

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.05 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 100, damping: 15 }
//   }
// };

// type SortOption = "newest" | "oldest" | "title";
// type LayoutOption = "masonry" | "grid";

// export default function Photography({ theme }: PhotographyProps) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
//   const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState<SortOption>("newest");
//   const [layout, setLayout] = useState<LayoutOption>("masonry");

//   // Filter and sort photos
//   const processedPhotos = useMemo(() => {
//     let filtered = selectedCategory === "All"
//       ? myPhotos
//       : myPhotos.filter(photo => photo.category === selectedCategory);

//     const sorted = [...filtered].sort((a, b) => {
//       switch (sortBy) {
//         case "newest":
//           return parseInt(b.id) - parseInt(a.id);
//         case "oldest":
//           return parseInt(a.id) - parseInt(b.id);
//         case "title":
//           return a.title.localeCompare(b.title);
//         default:
//           return 0;
//       }
//     });

//     return sorted;
//   }, [selectedCategory, sortBy]);

//   // Pagination
//   const totalPages = Math.ceil(processedPhotos.length / photosPerPage);
//   const indexOfLastPhoto = currentPage * photosPerPage;
//   const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
//   const currentPhotos = processedPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

//   React.useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedCategory]);

//   const toggleLike = (photoId: string) => {
//     setLikedPhotos(prev => {
//       const newLikes = new Set(prev);
//       if (newLikes.has(photoId)) {
//         newLikes.delete(photoId);
//       } else {
//         newLikes.add(photoId);
//       }
//       return newLikes;
//     });
//   };

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Card
//       className={`backdrop-blur-sm ${
//         theme === "dark"
//           ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
//           : "bg-white/80 border-[#E5E7EB] shadow-xl"
//       }`}
//     >
//       <CardHeader>
//         <div className="space-y-4">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//               <Camera className="w-7 h-7 text-purple-500" />
//               <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
//                 Photography Portfolio
//               </span>
//             </CardTitle>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setLayout("masonry")}
//                 className={`p-2 rounded-lg transition-all ${
//                   layout === "masonry"
//                     ? "bg-purple-500 text-white"
//                     : theme === "dark"
//                     ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D]"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//                 title="Masonry Layout"
//               >
//                 <Rows3 className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setLayout("grid")}
//                 className={`p-2 rounded-lg transition-all ${
//                   layout === "grid"
//                     ? "bg-purple-500 text-white"
//                     : theme === "dark"
//                     ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D]"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//                 title="Grid Layout"
//               >
//                 <Grid3x3 className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
//                     selectedCategory === category
//                       ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
//                       : theme === "dark"
//                       ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D] hover:text-white"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-2">
//               <SortAsc className="w-4 h-4 text-gray-500" />
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as SortOption)}
//                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                   theme === "dark"
//                     ? "bg-[#21262D] text-gray-300 border border-[#30363D] hover:bg-[#30363D]"
//                     : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
//                 } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="title">Alphabetical</option>
//               </select>
//             </div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`p-4 rounded-lg border ${
//               theme === "dark"
//                 ? "bg-purple-500/10 border-purple-500/30"
//                 : "bg-purple-50 border-purple-200"
//             }`}
//           >
//             <p className={`text-sm flex items-center gap-2 ${
//               theme === "dark" ? "text-purple-200" : "text-purple-900"
//             }`}>
//               <Aperture className="w-4 h-4 flex-shrink-0" />
//               <span>
//                 Capturing moments and telling stories through the lens. Photography is my passion for exploring perspectives and preserving memories.
//                 {processedPhotos.length > 0 && (
//                   <span className="ml-2 font-semibold">
//                     Showing {indexOfFirstPhoto + 1}-{Math.min(indexOfLastPhoto, processedPhotos.length)} of {processedPhotos.length} photos
//                   </span>
//                 )}
//               </span>
//             </p>
//           </motion.div>
//         </div>
//       </CardHeader>

//       <CardContent>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`${selectedCategory}-${currentPage}-${layout}`}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className={
//               layout === "masonry"
//                 ? "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
//                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             }
//           >
//             {currentPhotos.map((photo) => (
//               <motion.div
//                 key={photo.id}
//                 variants={itemVariants}
//                 whileHover={{ y: -8 }}
//                 className={`group relative cursor-pointer ${layout === "masonry" ? "break-inside-avoid mb-6" : ""}`}
//                 onClick={() => setSelectedPhoto(photo)}
//               >
//                 <div className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                   theme === "dark"
//                     ? "border-[#30363D] group-hover:border-purple-500/50"
//                     : "border-[#E5E7EB] group-hover:border-purple-400/50"
//                 } shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/20`}>
                  
//                   {photo.featured && (
//                     <div className="absolute top-3 right-3 z-10">
//                       <motion.div
//                         initial={{ scale: 0, rotate: -180 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
//                       >
//                         ⭐ Featured
//                       </motion.div>
//                     </div>
//                   )}

//                   <div className={`relative overflow-hidden bg-gray-900 ${layout === "grid" ? "aspect-square" : ""}`}>
//                     <img
//                       src={photo.imageUrl}
//                       alt={photo.title}
//                       className={`w-full ${layout === "grid" ? "h-full object-cover" : "h-auto"} transition-transform duration-500 group-hover:scale-110`}
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="absolute bottom-0 left-0 right-0 p-4">
//                         <h3 className="text-white font-semibold text-base md:text-lg mb-1 line-clamp-2">
//                           {photo.title}
//                         </h3>
//                         {photo.location && (
//                           <p className="text-white/80 text-xs md:text-sm flex items-center gap-1">
//                             <MapPin className="w-3 h-3 flex-shrink-0" />
//                             <span className="truncate">{photo.location}</span>
//                           </p>
//                         )}
//                       </div>
                      
//                       <div className="absolute top-4 right-4">
//                         <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
//                           <ZoomIn className="w-5 h-5 text-white" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute top-4 left-4 flex gap-2 z-10">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleLike(photo.id);
//                       }}
//                       className={`p-2 rounded-full backdrop-blur-md transition-colors ${
//                         likedPhotos.has(photo.id)
//                           ? "bg-red-500 text-white"
//                           : "bg-white/20 text-white hover:bg-white/30"
//                       }`}
//                     >
//                       <Heart className={`w-4 h-4 ${likedPhotos.has(photo.id) ? "fill-current" : ""}`} />
//                     </motion.button>
//                   </div>

//                   <div className="absolute bottom-4 right-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
//                       theme === "dark"
//                         ? "bg-white/20 text-white"
//                         : "bg-black/20 text-white"
//                     }`}>
//                       {photo.category}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {processedPhotos.length === 0 && (
//           <div className="text-center py-16">
//             <Camera className={`w-16 h-16 mx-auto mb-4 ${
//               theme === "dark" ? "text-gray-600" : "text-gray-400"
//             }`} />
//             <p className={`text-lg ${
//               theme === "dark" ? "text-gray-400" : "text-gray-600"
//             }`}>
//               No photos in this category yet.
//             </p>
//           </div>
//         )}

//         {totalPages > 1 && (
//           <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
//             <div className="flex items-center gap-2">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   onClick={() => paginate(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   variant="outline"
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D]"
//                       : "bg-white hover:bg-gray-50"
//                   }`}
//                 >
//                   <ChevronLeft className="w-4 h-4 mr-1" />
//                   Previous
//                 </Button>
//               </motion.div>

//               <div className="flex items-center gap-1">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => paginate(page)}
//                     className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
//                       currentPage === page
//                         ? "bg-purple-500 text-white shadow-lg"
//                         : theme === "dark"
//                         ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D]"
//                         : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//               </div>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   onClick={() => paginate(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   variant="outline"
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D]"
//                       : "bg-white hover:bg-gray-50"
//                   }`}
//                 >
//                   Next
//                   <ChevronRight className="w-4 h-4 ml-1" />
//                 </Button>
//               </motion.div>
//             </div>
//           </div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className={`mt-8 p-6 rounded-xl border ${
//             theme === "dark"
//               ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30"
//               : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300/30"
//           }`}
//         >
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {myPhotos.length}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Total Photos
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {categories.length - 1}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Categories
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {likedPhotos.size}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Favorites
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {myPhotos.filter(p => p.featured).length}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Featured
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 2025
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Active Year
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </CardContent>

//       <AnimatePresence>
//         {selectedPhoto && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedPhoto(null)}
//             className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
//             style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
//           >
//             <div className="min-h-full flex items-center justify-center p-4">
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className={`relative w-full max-w-6xl rounded-2xl overflow-hidden ${
//                   theme === "dark" ? "bg-[#161B22]" : "bg-white"
//                 } shadow-2xl`}
//               >
//                 <button
//                   onClick={() => setSelectedPhoto(null)}
//                   className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>

//                 {/* Image Section */}
//                 <div className="relative bg-black flex items-center justify-center p-4" style={{ minHeight: '400px', maxHeight: '70vh' }}>
//                   <img
//                     src={selectedPhoto.imageUrl}
//                     alt={selectedPhoto.title}
//                     className="max-w-full max-h-full w-auto h-auto object-contain"
//                   />
//                 </div>

//                 {/* Details Section */}
//                 <div className="p-6">
//                 <div className="flex items-start justify-between mb-3">
//                   <h2 className={`text-xl md:text-2xl font-bold ${
//                     theme === "dark" ? "text-white" : "text-gray-900"
//                   }`}>
//                     {selectedPhoto.title}
//                   </h2>
//                   {selectedPhoto.featured && (
//                     <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
//                       ⭐ Featured
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
//                   {selectedPhoto.location && (
//                     <div className="flex items-center gap-2">
//                       <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
//                       <span className={`text-sm ${
//                         theme === "dark" ? "text-gray-400" : "text-gray-600"
//                       }`}>
//                         {selectedPhoto.location}
//                       </span>
//                     </div>
//                   )}
//                   {selectedPhoto.date && (
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4 text-purple-500 flex-shrink-0" />
//                       <span className={`text-sm ${
//                         theme === "dark" ? "text-gray-400" : "text-gray-600"
//                       }`}>
//                         {selectedPhoto.date}
//                       </span>
//                     </div>
//                   )}
//                   {selectedPhoto.camera && (
//                     <div className="flex items-center gap-2">
//                       <Camera className="w-4 h-4 text-purple-500 flex-shrink-0" />
//                       <span className={`text-sm ${
//                         theme === "dark" ? "text-gray-400" : "text-gray-600"
//                       }`}>
//                         {selectedPhoto.camera}
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {selectedPhoto.description && (
//                   <p className={`text-sm mb-4 leading-relaxed ${
//                     theme === "dark" ? "text-gray-300" : "text-gray-700"
//                   }`}>
//                     {selectedPhoto.description}
//                   </p>
//                 )}

//                 <div className="flex gap-3">
//                   <Button
//                     variant="outline"
//                     className="flex-1"
//                     onClick={() => toggleLike(selectedPhoto.id)}
//                   >
//                     <Heart className={`w-4 h-4 mr-2 ${
//                       likedPhotos.has(selectedPhoto.id) ? "fill-current text-red-500" : ""
//                     }`} />
//                     {likedPhotos.has(selectedPhoto.id) ? "Liked" : "Like"}
//                   </Button>
//                   <Button
//                     variant="default"
//                     className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
//                     asChild
//                   >
//                     <a href={selectedPhoto.imageUrl} download target="_blank" rel="noopener noreferrer">
//                       <Download className="w-4 h-4 mr-2" />
//                       Download
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Card>
//   );
// }


// "use client";

// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Camera,
//   X,
//   Download,
//   Heart,
//   MapPin,
//   Calendar,
//   Aperture,
//   ZoomIn,
//   ChevronLeft,
//   ChevronRight,
//   SortAsc,
//   Grid3x3,
//   Rows3,
// } from "lucide-react";

// interface Photo {
//   id: string;
//   title: string;
//   imageUrl: string;
//   location?: string;
//   date?: string;
//   camera?: string;
//   description?: string;
//   category: string;
//   orientation?: "landscape" | "portrait" | "square";
//   featured?: boolean; // Mark special photos
// }

// interface PhotographyProps {
//   theme: "light" | "dark";
// }

// // ==========================================
// // 📸 YOUR PHOTOS - Add new photos here!
// // ==========================================
// const myPhotos: Photo[] = [
//   {
//     id: "1",
//     title: "Lakeside Muscovy Portrait",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0993_foiewg.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A low-angle, cinematic portrait of a Muscovy duck standing on grass, framed against a lake fountain and overcast sky.",
//     category: "Wildlife",
//     orientation: "portrait",
//     featured: true
//   },
//   {
//     id: "2",
//     title: "Lakeside Muscovy Duo",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1108_xhikjl.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A wide, cinematic shot of two Muscovy ducks standing on a grassy bank, looking out over a rainy lake with a clubhouse in the distance, framed by dark foliage on the right.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "3",
//     title: "Curious Muscovy Gaze",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0978_tztmsm.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A close-up, cinematic portrait of a Muscovy duck on a grassy bank, gazing inquisitively into the lens with a soft, blurred residential backdrop.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "5",
//     title: "Twilight Traffic Motion",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_1247_kuowya.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic long-exposure landscape capturing the motion blur of passing cars against a backdrop of a warm-lit building and palm trees during blue hour.",
//     category: "Urban",
//     orientation: "landscape",
//     featured: true
//   },
//   {
//     id: "6",
//     title: "Inquisitive Muscovy Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_0972_zlhjck.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, low-angle shot of a Muscovy duck stretching its neck forward to investigate the grass, set against a blurred background of palm trees and apartments.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "7",
//     title: "Fading Floral Melancholy",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1511_avz6vn.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A moody, cinematic top-down shot of fading white roses resting on a bed of dark green clover, capturing the delicate textures of withered petals in low light.",
//     category: "Nature",
//     orientation: "landscape"
//   },
//   {
//     id: "8",
//     title: "Shadowed Solitude on Green",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272701/IMG_1811_c1cuo5.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle shot of a Muscovy duck traversing a vibrant green lawn, with high-contrast lighting casting deep shadows that highlight the texture of the grass.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "9",
//     title: "Geometric Urban Glow",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0283_tkxvrf.jpg",
//     location: "Boca Raton, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic shot of a modern street lamp with glowing geometric fixtures, contrasting against the rhythmic grid of a grey building facade at twilight.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "10",
//     title: "Grazing Muscovy Close-Up",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_2081_it9gfz.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A candid, cinematic profile shot of a Muscovy duck grazing in the grass with its beak open, framed against a soft, blurred background of a tiled roof and sky.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "11",
//     title: "Skyward Iguana Sentry",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0247_dcw2ah.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic low-angle shot of a green iguana perched high on a tiled roof corner, framed by palm fronds and white gutters against a cloudy blue sky.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "12",
//     title: "Lakeside Ibis Stroll",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_1776_patk8p.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic wide shot of an American White Ibis standing on a vibrant green bank, its white plumage contrasting sharply against the deep blue water of the lake.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "13",
//     title: "Solitary Night Light",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0399_eng4ft.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic shot of a single street lamp glowing against an absolute black void, highlighting the isolation and calm of the night.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "14",
//     title: "Mail Center Solitude",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0252_kxnh8s.jpg",
//     location: "Citation Club Apartments",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic night shot capturing a solitary figure silhouetted against the warm, inviting glow of an outdoor mail center, framed by deep shadows and architectural pillars.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "15",
//     title: "Flight Over Dark Waters",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_1869_cfjiwq.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic action shot of a white bird taking flight over dark, rippling lake water, its wings spread wide against the deep blue contrast and green grassy bank.",
//     category: "Wildlife",
//     orientation: "landscape",
//     featured: true
//   },
//   {
//     id: "16",
//     title: "Rain-Soaked Muscovy Lookback",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_1080_jczzts.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic portrait of a Muscovy duck standing in the rain on a grassy bank, looking back over its shoulder with water droplets clinging to its iridescent feathers.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "17",
//     title: "Stone Perch Sentinel",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_0912_ogxzfz.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic close-up of a brown lizard resting on a weathered concrete paver, its textured scales detailed against a soft, blurred background of garden grass.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "18",
//     title: "Nocturnal Fender Lines",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3884_zcbo9q.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle detail shot of a white car's front fender and alloy wheel, capturing the sleek body curves under artificial night lighting.",
//     category: "Automotive",
//     orientation: "portrait"
//   },
//   {
//     id: "19",
//     title: "High Altitude Howdy",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_4017_jfvmqv.jpg",
//     location: "In Flight",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic vertical shot from an airplane window, capturing the winglet silhouette against a vibrant orange sunset horizon and a sea of clouds below.",
//     category: "Travel",
//     orientation: "portrait"
//   },
//   {
//     id: "20",
//     title: "Twilight Transit Motion",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3890_v5e2pj.jpg",
//     location: "Roadside",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, abstract motion blur shot of vehicle lights streaking in red and gold horizontal lines against a deep twilight sky, capturing the energy of travel.",
//     category: "Abstract",
//     orientation: "portrait"
//   },
//   {
//     id: "21",
//     title: "Grainy Blue Hour Lamp",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3942_nigpkb.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm yellow against a deep, grainy blue twilight sky, emphasizing negative space.",
//     category: "Urban",
//     orientation: "portrait"
//   },
//   {
//     id: "22",
//     title: "Rain-Kissed Side View",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3919_l2unr2.jpg",
//     location: "Car Interior",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A moody, cinematic vertical shot through a rain-streaked car window, focusing on the intricate pattern of water droplets with a blurred white side mirror in the background.",
//     category: "Abstract",
//     orientation: "portrait"
//   },
//   {
//     id: "23",
//     title: "Sleek Fender Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3885_zzm2b8.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle close-up of a white car's front profile, showcasing the sleek fender lines and alloy wheel details against the texture of a paved surface at night.",
//     category: "Automotive",
//     orientation: "portrait"
//   },
//   {
//     id: "24",
//     title: "Blue Hour Minimalist Lamp",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275865/IMG_3943_g2gmok.jpg",
//     location: "Delray Beach",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm against a clean, deep blue twilight sky, emphasizing negative space and simplicity.",
//     category: "Urban",
//     orientation: "portrait"
//   },
//   {
//     id: "25",
//     title: "Monochrome Roofline Geometry",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276528/IMG_3899_kvtpah.jpg",
//     location: "Delray Beach",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic, black and white vertical shot capturing the sharp geometric angles of a tiled roof against a moody, overcast sky, emphasizing architectural texture.",
//     category: "Architecture",
//     orientation: "portrait"
//   },
//   {
//     id: "26",
//     title: "Tropical Tower Skyline",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/BF5AAB63-87A5-4E20-B814-CF020502C5A5_jkc8vr.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic landscape shot of a tall palm tree swaying against a deep teal sky, framing a beige architectural tower and billowing white clouds in the distance.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "27",
//     title: "Rustic Muscovy Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3895_rtvufc.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, vertical close-up profile of a Muscovy duck, capturing the details of its beak and red facial caruncles against a textured background of dry grass.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "28",
//     title: "Iridescent Muscovy Interaction",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3893_dgxnjn.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic vertical shot capturing a social moment between Muscovy ducks on a grassy bank, highlighting the vibrant iridescent purple and green sheen on the wings of the central bird.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "29",
//     title: "Lakeside Trio Gathering",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/IMG_3897_eipxaj.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic high-angle shot of three ducks standing on a vibrant green grassy bank next to the water, showcasing their varied brown and speckled plumage against the natural texture of the shoreline.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "30",
//     title: "Tropical Twilight Silhouette",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/62E4AAE9-57DA-4BA1-9952-8E37306F8FA4_o05pg0.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic landscape shot of a tall palm tree silhouette centered against a gradient sky transitioning from deep blue to warm sunset orange.",
//     category: "Nature",
//     orientation: "landscape"
//   }
// ];

// // Auto-generate categories from photos
// const categories = ["All", ...Array.from(new Set(myPhotos.map(p => p.category))).sort()];

// const photosPerPage = 12;

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.05 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 100, damping: 15 }
//   }
// };

// type SortOption = "newest" | "oldest" | "title";
// type LayoutOption = "masonry" | "grid";

// export default function Photography({ theme }: PhotographyProps) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
//   const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState<SortOption>("newest");
//   const [layout, setLayout] = useState<LayoutOption>("masonry");

//   // Filter and sort photos
//   const processedPhotos = useMemo(() => {
//     let filtered = selectedCategory === "All"
//       ? myPhotos
//       : myPhotos.filter(photo => photo.category === selectedCategory);

//     const sorted = [...filtered].sort((a, b) => {
//       switch (sortBy) {
//         case "newest":
//           return parseInt(b.id) - parseInt(a.id);
//         case "oldest":
//           return parseInt(a.id) - parseInt(b.id);
//         case "title":
//           return a.title.localeCompare(b.title);
//         default:
//           return 0;
//       }
//     });

//     return sorted;
//   }, [selectedCategory, sortBy]);

//   // Pagination
//   const totalPages = Math.ceil(processedPhotos.length / photosPerPage);
//   const indexOfLastPhoto = currentPage * photosPerPage;
//   const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
//   const currentPhotos = processedPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

//   React.useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedCategory]);

//   const toggleLike = (photoId: string) => {
//     setLikedPhotos(prev => {
//       const newLikes = new Set(prev);
//       if (newLikes.has(photoId)) {
//         newLikes.delete(photoId);
//       } else {
//         newLikes.add(photoId);
//       }
//       return newLikes;
//     });
//   };

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Card
//       className={`backdrop-blur-sm ${
//         theme === "dark"
//           ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
//           : "bg-white/80 border-[#E5E7EB] shadow-xl"
//       }`}
//     >
//       <CardHeader>
//         <div className="space-y-4">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//               <Camera className="w-7 h-7 text-purple-500" />
//               <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
//                 Photography Portfolio
//               </span>
//             </CardTitle>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setLayout("masonry")}
//                 className={`p-2 rounded-lg transition-all ${
//                   layout === "masonry"
//                     ? "bg-purple-500 text-white"
//                     : theme === "dark"
//                     ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D]"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//                 title="Masonry Layout"
//               >
//                 <Rows3 className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setLayout("grid")}
//                 className={`p-2 rounded-lg transition-all ${
//                   layout === "grid"
//                     ? "bg-purple-500 text-white"
//                     : theme === "dark"
//                     ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D]"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//                 title="Grid Layout"
//               >
//                 <Grid3x3 className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
//                     selectedCategory === category
//                       ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
//                       : theme === "dark"
//                       ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D] hover:text-white"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-2">
//               <SortAsc className="w-4 h-4 text-gray-500" />
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as SortOption)}
//                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                   theme === "dark"
//                     ? "bg-[#21262D] text-gray-300 border border-[#30363D] hover:bg-[#30363D]"
//                     : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
//                 } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="title">Alphabetical</option>
//               </select>
//             </div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`p-4 rounded-lg border ${
//               theme === "dark"
//                 ? "bg-purple-500/10 border-purple-500/30"
//                 : "bg-purple-50 border-purple-200"
//             }`}
//           >
//             <p className={`text-sm flex items-center gap-2 ${
//               theme === "dark" ? "text-purple-200" : "text-purple-900"
//             }`}>
//               <Aperture className="w-4 h-4 flex-shrink-0" />
//               <span>
//                 Capturing moments and telling stories through the lens. Photography is my passion for exploring perspectives and preserving memories.
//                 {processedPhotos.length > 0 && (
//                   <span className="ml-2 font-semibold">
//                     Showing {indexOfFirstPhoto + 1}-{Math.min(indexOfLastPhoto, processedPhotos.length)} of {processedPhotos.length} photos
//                   </span>
//                 )}
//               </span>
//             </p>
//           </motion.div>
//         </div>
//       </CardHeader>

//       <CardContent>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`${selectedCategory}-${currentPage}-${layout}`}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className={
//               layout === "masonry"
//                 ? "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
//                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             }
//           >
//             {currentPhotos.map((photo) => (
//               <motion.div
//                 key={photo.id}
//                 variants={itemVariants}
//                 whileHover={{ y: -8 }}
//                 className={`group relative cursor-pointer ${layout === "masonry" ? "break-inside-avoid mb-6" : ""}`}
//                 onClick={() => setSelectedPhoto(photo)}
//               >
//                 <div className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                   theme === "dark"
//                     ? "border-[#30363D] group-hover:border-purple-500/50"
//                     : "border-[#E5E7EB] group-hover:border-purple-400/50"
//                 } shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/20`}>
                  
//                   {photo.featured && (
//                     <div className="absolute top-3 right-3 z-10">
//                       <motion.div
//                         initial={{ scale: 0, rotate: -180 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
//                       >
//                         ⭐ Featured
//                       </motion.div>
//                     </div>
//                   )}

//                   <div className={`relative overflow-hidden bg-gray-900 ${layout === "grid" ? "aspect-square" : ""}`}>
//                     <img
//                       src={photo.imageUrl}
//                       alt={photo.title}
//                       className={`w-full ${layout === "grid" ? "h-full object-cover" : "h-auto"} transition-transform duration-500 group-hover:scale-110`}
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="absolute bottom-0 left-0 right-0 p-4">
//                         <h3 className="text-white font-semibold text-base md:text-lg mb-1 line-clamp-2">
//                           {photo.title}
//                         </h3>
//                         {photo.location && (
//                           <p className="text-white/80 text-xs md:text-sm flex items-center gap-1">
//                             <MapPin className="w-3 h-3 flex-shrink-0" />
//                             <span className="truncate">{photo.location}</span>
//                           </p>
//                         )}
//                       </div>
                      
//                       <div className="absolute top-4 right-4">
//                         <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
//                           <ZoomIn className="w-5 h-5 text-white" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute top-4 left-4 flex gap-2 z-10">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleLike(photo.id);
//                       }}
//                       className={`p-2 rounded-full backdrop-blur-md transition-colors ${
//                         likedPhotos.has(photo.id)
//                           ? "bg-red-500 text-white"
//                           : "bg-white/20 text-white hover:bg-white/30"
//                       }`}
//                     >
//                       <Heart className={`w-4 h-4 ${likedPhotos.has(photo.id) ? "fill-current" : ""}`} />
//                     </motion.button>
//                   </div>

//                   <div className="absolute bottom-4 right-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
//                       theme === "dark"
//                         ? "bg-white/20 text-white"
//                         : "bg-black/20 text-white"
//                     }`}>
//                       {photo.category}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {processedPhotos.length === 0 && (
//           <div className="text-center py-16">
//             <Camera className={`w-16 h-16 mx-auto mb-4 ${
//               theme === "dark" ? "text-gray-600" : "text-gray-400"
//             }`} />
//             <p className={`text-lg ${
//               theme === "dark" ? "text-gray-400" : "text-gray-600"
//             }`}>
//               No photos in this category yet.
//             </p>
//           </div>
//         )}

//         {totalPages > 1 && (
//           <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
//             <div className="flex items-center gap-2">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   onClick={() => paginate(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   variant="outline"
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D]"
//                       : "bg-white hover:bg-gray-50"
//                   }`}
//                 >
//                   <ChevronLeft className="w-4 h-4 mr-1" />
//                   Previous
//                 </Button>
//               </motion.div>

//               <div className="flex items-center gap-1">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => paginate(page)}
//                     className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
//                       currentPage === page
//                         ? "bg-purple-500 text-white shadow-lg"
//                         : theme === "dark"
//                         ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D]"
//                         : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//               </div>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   onClick={() => paginate(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   variant="outline"
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D]"
//                       : "bg-white hover:bg-gray-50"
//                   }`}
//                 >
//                   Next
//                   <ChevronRight className="w-4 h-4 ml-1" />
//                 </Button>
//               </motion.div>
//             </div>
//           </div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className={`mt-8 p-6 rounded-xl border ${
//             theme === "dark"
//               ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30"
//               : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300/30"
//           }`}
//         >
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {myPhotos.length}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Total Photos
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {categories.length - 1}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Categories
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {likedPhotos.size}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Favorites
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 {myPhotos.filter(p => p.featured).length}
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Featured
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl md:text-3xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}>
//                 2025
//               </div>
//               <div className={`text-sm ${
//                 theme === "dark" ? "text-gray-400" : "text-gray-600"
//               }`}>
//                 Active Year
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </CardContent>

//       <AnimatePresence>
//         {selectedPhoto && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedPhoto(null)}
//             className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
//             style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
//           >
//             <div className="min-h-full flex items-center justify-center p-4">
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className={`relative w-full max-w-6xl rounded-2xl overflow-hidden ${
//                   theme === "dark" ? "bg-[#161B22]" : "bg-white"
//                 } shadow-2xl`}
//               >
//                 <button
//                   onClick={() => setSelectedPhoto(null)}
//                   className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>

//                 {/* Image Section */}
//                 <div className="relative bg-black flex items-center justify-center p-4" style={{ minHeight: '400px', maxHeight: '70vh' }}>
//                   <img
//                     src={selectedPhoto.imageUrl}
//                     alt={selectedPhoto.title}
//                     className="max-w-full max-h-full w-auto h-auto object-contain"
//                   />
//                 </div>

//                 {/* Details Section */}
//                 <div className="p-6">
//                 <div className="flex items-start justify-between mb-3">
//                   <h2 className={`text-xl md:text-2xl font-bold ${
//                     theme === "dark" ? "text-white" : "text-gray-900"
//                   }`}>
//                     {selectedPhoto.title}
//                   </h2>
//                   {selectedPhoto.featured && (
//                     <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
//                       ⭐ Featured
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
//                   {selectedPhoto.location && (
//                     <div className="flex items-center gap-2">
//                       <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
//                       <span className={`text-sm ${
//                         theme === "dark" ? "text-gray-400" : "text-gray-600"
//                       }`}>
//                         {selectedPhoto.location}
//                       </span>
//                     </div>
//                   )}
//                   {selectedPhoto.date && (
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4 text-purple-500 flex-shrink-0" />
//                       <span className={`text-sm ${
//                         theme === "dark" ? "text-gray-400" : "text-gray-600"
//                       }`}>
//                         {selectedPhoto.date}
//                       </span>
//                     </div>
//                   )}
//                   {selectedPhoto.camera && (
//                     <div className="flex items-center gap-2">
//                       <Camera className="w-4 h-4 text-purple-500 flex-shrink-0" />
//                       <span className={`text-sm ${
//                         theme === "dark" ? "text-gray-400" : "text-gray-600"
//                       }`}>
//                         {selectedPhoto.camera}
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {selectedPhoto.description && (
//                   <p className={`text-sm mb-4 leading-relaxed ${
//                     theme === "dark" ? "text-gray-300" : "text-gray-700"
//                   }`}>
//                     {selectedPhoto.description}
//                   </p>
//                 )}

//                 <div className="flex gap-3">
//                   <Button
//                     variant="outline"
//                     className="flex-1"
//                     onClick={() => toggleLike(selectedPhoto.id)}
//                   >
//                     <Heart className={`w-4 h-4 mr-2 ${
//                       likedPhotos.has(selectedPhoto.id) ? "fill-current text-red-500" : ""
//                     }`} />
//                     {likedPhotos.has(selectedPhoto.id) ? "Liked" : "Like"}
//                   </Button>
//                   <Button
//                     variant="default"
//                     className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
//                     asChild
//                   >
//                     <a href={selectedPhoto.imageUrl} download target="_blank" rel="noopener noreferrer">
//                       <Download className="w-4 h-4 mr-2" />
//                       Download
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Card>
//   );
// }





// "use client";

// import React, { useState, useMemo, useEffect, useCallback } from "react";
// import { createPortal } from "react-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Camera,
//   X,
//   Download,
//   Heart,
//   MapPin,
//   Calendar,
//   Aperture,
//   ZoomIn,
//   ChevronLeft,
//   ChevronRight,
//   SortAsc,
//   Grid3x3,
//   Rows3,
//   Loader2,
// } from "lucide-react";

// // --- Types ---
// interface Photo {
//   id: string;
//   title: string;
//   imageUrl: string;
//   location?: string;
//   date?: string;
//   camera?: string;
//   description?: string;
//   category: string;
//   orientation?: "landscape" | "portrait" | "square";
//   featured?: boolean;
// }

// interface PhotographyProps {
//   theme: "light" | "dark";
// }

// // --- Data ---
// const myPhotos: Photo[] = [
//   {
//     id: "1",
//     title: "Lakeside Muscovy Portrait",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0993_foiewg.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A low-angle, cinematic portrait of a Muscovy duck standing on grass, framed against a lake fountain and overcast sky.",
//     category: "Wildlife",
//     orientation: "portrait",
//     featured: true
//   },
//   {
//     id: "2",
//     title: "Lakeside Muscovy Duo",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1108_xhikjl.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A wide, cinematic shot of two Muscovy ducks standing on a grassy bank, looking out over a rainy lake with a clubhouse in the distance, framed by dark foliage on the right.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "3",
//     title: "Curious Muscovy Gaze",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0978_tztmsm.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A close-up, cinematic portrait of a Muscovy duck on a grassy bank, gazing inquisitively into the lens with a soft, blurred residential backdrop.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "5",
//     title: "Twilight Traffic Motion",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_1247_kuowya.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic long-exposure landscape capturing the motion blur of passing cars against a backdrop of a warm-lit building and palm trees during blue hour.",
//     category: "Urban",
//     orientation: "landscape",
//     featured: true
//   },
//   {
//     id: "6",
//     title: "Inquisitive Muscovy Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_0972_zlhjck.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, low-angle shot of a Muscovy duck stretching its neck forward to investigate the grass, set against a blurred background of palm trees and apartments.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "7",
//     title: "Fading Floral Melancholy",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1511_avz6vn.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A moody, cinematic top-down shot of fading white roses resting on a bed of dark green clover, capturing the delicate textures of withered petals in low light.",
//     category: "Nature",
//     orientation: "landscape"
//   },
//   {
//     id: "8",
//     title: "Shadowed Solitude on Green",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272701/IMG_1811_c1cuo5.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle shot of a Muscovy duck traversing a vibrant green lawn, with high-contrast lighting casting deep shadows that highlight the texture of the grass.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "9",
//     title: "Geometric Urban Glow",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0283_tkxvrf.jpg",
//     location: "Boca Raton, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic shot of a modern street lamp with glowing geometric fixtures, contrasting against the rhythmic grid of a grey building facade at twilight.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "10",
//     title: "Grazing Muscovy Close-Up",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_2081_it9gfz.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A candid, cinematic profile shot of a Muscovy duck grazing in the grass with its beak open, framed against a soft, blurred background of a tiled roof and sky.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "11",
//     title: "Skyward Iguana Sentry",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0247_dcw2ah.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic low-angle shot of a green iguana perched high on a tiled roof corner, framed by palm fronds and white gutters against a cloudy blue sky.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "12",
//     title: "Lakeside Ibis Stroll",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_1776_patk8p.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic wide shot of an American White Ibis standing on a vibrant green bank, its white plumage contrasting sharply against the deep blue water of the lake.",
//     category: "Wildlife",
//     orientation: "landscape"
//   },
//   {
//     id: "13",
//     title: "Solitary Night Light",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0399_eng4ft.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic shot of a single street lamp glowing against an absolute black void, highlighting the isolation and calm of the night.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "14",
//     title: "Mail Center Solitude",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0252_kxnh8s.jpg",
//     location: "Citation Club Apartments",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic night shot capturing a solitary figure silhouetted against the warm, inviting glow of an outdoor mail center, framed by deep shadows and architectural pillars.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "15",
//     title: "Flight Over Dark Waters",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_1869_cfjiwq.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic action shot of a white bird taking flight over dark, rippling lake water, its wings spread wide against the deep blue contrast and green grassy bank.",
//     category: "Wildlife",
//     orientation: "landscape",
//     featured: true
//   },
//   {
//     id: "16",
//     title: "Rain-Soaked Muscovy Lookback",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_1080_jczzts.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic portrait of a Muscovy duck standing in the rain on a grassy bank, looking back over its shoulder with water droplets clinging to its iridescent feathers.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "17",
//     title: "Stone Perch Sentinel",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_0912_ogxzfz.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic close-up of a brown lizard resting on a weathered concrete paver, its textured scales detailed against a soft, blurred background of garden grass.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "18",
//     title: "Nocturnal Fender Lines",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3884_zcbo9q.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle detail shot of a white car's front fender and alloy wheel, capturing the sleek body curves under artificial night lighting.",
//     category: "Automotive",
//     orientation: "portrait"
//   },
//   {
//     id: "19",
//     title: "High Altitude Howdy",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_4017_jfvmqv.jpg",
//     location: "In Flight",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic vertical shot from an airplane window, capturing the winglet silhouette against a vibrant orange sunset horizon and a sea of clouds below.",
//     category: "Travel",
//     orientation: "portrait"
//   },
//   {
//     id: "20",
//     title: "Twilight Transit Motion",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3890_v5e2pj.jpg",
//     location: "Roadside",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, abstract motion blur shot of vehicle lights streaking in red and gold horizontal lines against a deep twilight sky, capturing the energy of travel.",
//     category: "Abstract",
//     orientation: "portrait"
//   },
//   {
//     id: "21",
//     title: "Grainy Blue Hour Lamp",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3942_nigpkb.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm yellow against a deep, grainy blue twilight sky, emphasizing negative space.",
//     category: "Urban",
//     orientation: "portrait"
//   },
//   {
//     id: "22",
//     title: "Rain-Kissed Side View",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3919_l2unr2.jpg",
//     location: "Car Interior",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A moody, cinematic vertical shot through a rain-streaked car window, focusing on the intricate pattern of water droplets with a blurred white side mirror in the background.",
//     category: "Abstract",
//     orientation: "portrait"
//   },
//   {
//     id: "23",
//     title: "Sleek Fender Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3885_zzm2b8.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, high-angle close-up of a white car's front profile, showcasing the sleek fender lines and alloy wheel details against the texture of a paved surface at night.",
//     category: "Automotive",
//     orientation: "portrait"
//   },
//   {
//     id: "24",
//     title: "Blue Hour Minimalist Lamp",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275865/IMG_3943_g2gmok.jpg",
//     location: "Delray Beach",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm against a clean, deep blue twilight sky, emphasizing negative space and simplicity.",
//     category: "Urban",
//     orientation: "portrait"
//   },
//   {
//     id: "25",
//     title: "Monochrome Roofline Geometry",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276528/IMG_3899_kvtpah.jpg",
//     location: "Delray Beach",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic, black and white vertical shot capturing the sharp geometric angles of a tiled roof against a moody, overcast sky, emphasizing architectural texture.",
//     category: "Architecture",
//     orientation: "portrait"
//   },
//   {
//     id: "26",
//     title: "Tropical Tower Skyline",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/BF5AAB63-87A5-4E20-B814-CF020502C5A5_jkc8vr.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic landscape shot of a tall palm tree swaying against a deep teal sky, framing a beige architectural tower and billowing white clouds in the distance.",
//     category: "Urban",
//     orientation: "landscape"
//   },
//   {
//     id: "27",
//     title: "Rustic Muscovy Profile",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3895_rtvufc.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic, vertical close-up profile of a Muscovy duck, capturing the details of its beak and red facial caruncles against a textured background of dry grass.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "28",
//     title: "Iridescent Muscovy Interaction",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3893_dgxnjn.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic vertical shot capturing a social moment between Muscovy ducks on a grassy bank, highlighting the vibrant iridescent purple and green sheen on the wings of the central bird.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "29",
//     title: "Lakeside Trio Gathering",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/IMG_3897_eipxaj.jpg",
//     location: "Delray Beach, Florida",
//     date: "2025",
//     camera: "Canon EOS R50",
//     description: "A cinematic high-angle shot of three ducks standing on a vibrant green grassy bank next to the water, showcasing their varied brown and speckled plumage against the natural texture of the shoreline.",
//     category: "Wildlife",
//     orientation: "portrait"
//   },
//   {
//     id: "30",
//     title: "Tropical Twilight Silhouette",
//     imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/62E4AAE9-57DA-4BA1-9952-8E37306F8FA4_o05pg0.jpg",
//     location: "Lakeworth, Florida",
//     date: "2025",
//     camera: "iPhone 13 Pro",
//     description: "A cinematic landscape shot of a tall palm tree silhouette centered against a gradient sky transitioning from deep blue to warm sunset orange.",
//     category: "Nature",
//     orientation: "landscape"
//   }
// ];

// // Auto-generate categories
// const categories = ["All", ...Array.from(new Set(myPhotos.map(p => p.category))).sort()];
// const photosPerPage = 12;

// // --- Animations ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.05, delayChildren: 0.1 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.9, y: 20 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 100, damping: 20 }
//   }
// };

// type SortOption = "newest" | "oldest" | "title";
// type LayoutOption = "masonry" | "grid";

// // --- Helper Component: SmoothImage ---
// const SmoothImage = ({ src, alt, className, layout }: { src: string; alt: string; className: string; layout?: string }) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <div className={`relative overflow-hidden bg-gray-900 ${className}`}>
//       {!isLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm z-0">
//           <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
//         </div>
//       )}
//       <motion.img
//         src={src}
//         alt={alt}
//         onLoad={() => setIsLoaded(true)}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isLoaded ? 1 : 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className={`relative z-10 w-full ${layout === "grid" ? "h-full object-cover" : "h-auto"} transition-transform duration-700 hover:scale-105`}
//         loading="lazy"
//       />
//     </div>
//   );
// };

// export default function Photography({ theme }: PhotographyProps) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
//   const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState<SortOption>("newest");
//   const [layout, setLayout] = useState<LayoutOption>("masonry");
//   const [mounted, setMounted] = useState(false); 

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (selectedPhoto) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [selectedPhoto]);

//   // Filter and sort photos
//   const processedPhotos = useMemo(() => {
//     let filtered = selectedCategory === "All"
//       ? myPhotos
//       : myPhotos.filter(photo => photo.category === selectedCategory);

//     const sorted = [...filtered].sort((a, b) => {
//       switch (sortBy) {
//         case "newest":
//           return parseInt(b.id) - parseInt(a.id);
//         case "oldest":
//           return parseInt(a.id) - parseInt(b.id);
//         case "title":
//           return a.title.localeCompare(b.title);
//         default:
//           return 0;
//       }
//     });

//     return sorted;
//   }, [selectedCategory, sortBy]);

//   // Pagination Logic
//   const totalPages = Math.ceil(processedPhotos.length / photosPerPage);
//   const indexOfLastPhoto = currentPage * photosPerPage;
//   const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
//   const currentPhotos = processedPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedCategory]);

//   const toggleLike = (photoId: string) => {
//     setLikedPhotos(prev => {
//       const newLikes = new Set(prev);
//       if (newLikes.has(photoId)) {
//         newLikes.delete(photoId);
//       } else {
//         newLikes.add(photoId);
//       }
//       return newLikes;
//     });
//   };

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const navigatePhoto = useCallback((direction: "next" | "prev") => {
//     if (!selectedPhoto) return;
//     const currentIndex = processedPhotos.findIndex(p => p.id === selectedPhoto.id);
//     if (currentIndex === -1) return;

//     let newIndex;
//     if (direction === "next") {
//       newIndex = (currentIndex + 1) % processedPhotos.length;
//     } else {
//       newIndex = (currentIndex - 1 + processedPhotos.length) % processedPhotos.length;
//     }
//     setSelectedPhoto(processedPhotos[newIndex]);
//   }, [selectedPhoto, processedPhotos]);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!selectedPhoto) return;
//       if (e.key === "ArrowRight") navigatePhoto("next");
//       if (e.key === "ArrowLeft") navigatePhoto("prev");
//       if (e.key === "Escape") setSelectedPhoto(null);
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [selectedPhoto, navigatePhoto]);


//   return (
//     <Card
//       className={`backdrop-blur-sm transition-colors duration-300 ${
//         theme === "dark"
//           ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
//           : "bg-white/80 border-[#E5E7EB] shadow-xl"
//       }`}
//     >
//       <CardHeader>
//         <div className="space-y-4">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//               <div className="p-2 bg-blue-500/10 rounded-xl">
//                 <Camera className="w-7 h-7 text-blue-500" />
//               </div>
//               <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
//                 Photography Portfolio
//               </span>
//             </CardTitle>

//             <div className="flex gap-2 bg-gray-100/5 dark:bg-gray-800/30 p-1 rounded-xl">
//               <button
//                 onClick={() => setLayout("masonry")}
//                 className={`p-2 rounded-lg transition-all duration-200 ${
//                   layout === "masonry"
//                     ? "bg-blue-500 text-white shadow-md"
//                     : theme === "dark"
//                     ? "text-gray-400 hover:bg-[#30363D] hover:text-white"
//                     : "text-gray-600 hover:bg-gray-200"
//                 }`}
//                 title="Masonry Layout"
//                 aria-label="Switch to Masonry Layout"
//               >
//                 <Rows3 className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setLayout("grid")}
//                 className={`p-2 rounded-lg transition-all duration-200 ${
//                   layout === "grid"
//                     ? "bg-blue-500 text-white shadow-md"
//                     : theme === "dark"
//                     ? "text-gray-400 hover:bg-[#30363D] hover:text-white"
//                     : "text-gray-600 hover:bg-gray-200"
//                 }`}
//                 title="Grid Layout"
//                 aria-label="Switch to Grid Layout"
//               >
//                 <Grid3x3 className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
//                     selectedCategory === category
//                       ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/20"
//                       : theme === "dark"
//                       ? "bg-[#21262D] text-gray-400 border-[#30363D] hover:border-gray-500 hover:text-white"
//                       : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border w-full md:w-auto ${
//                   theme === "dark"
//                     ? "bg-[#21262D] border-[#30363D]"
//                     : "bg-gray-50 border-gray-200"
//                 }`}>
//                 <SortAsc className="w-4 h-4 text-gray-500" />
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value as SortOption)}
//                   className="bg-transparent text-sm font-medium focus:outline-none w-full"
//                   style={{ color: theme === "dark" ? "#e5e7eb" : "#374151" }}
//                   aria-label="Sort photos"
//                 >
//                   <option value="newest">Newest First</option>
//                   <option value="oldest">Oldest First</option>
//                   <option value="title">Alphabetical</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`p-4 rounded-lg border flex items-start gap-3 ${
//               theme === "dark"
//                 ? "bg-blue-500/5 border-blue-500/20"
//                 : "bg-blue-50 border-blue-100"
//             }`}
//           >
//             <Aperture className={`w-5 h-5 flex-shrink-0 mt-0.5 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
//             <p className={`text-sm leading-relaxed ${
//               theme === "dark" ? "text-blue-200" : "text-blue-900"
//             }`}>
//               Capturing moments and telling stories through the lens. Photography is my passion for exploring perspectives and preserving memories.
//               {processedPhotos.length > 0 && (
//                 <span className="block mt-1 font-semibold opacity-80">
//                   Showing {indexOfFirstPhoto + 1}-{Math.min(indexOfLastPhoto, processedPhotos.length)} of {processedPhotos.length} photos
//                 </span>
//               )}
//             </p>
//           </motion.div>
//         </div>
//       </CardHeader>

//       <CardContent>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`${selectedCategory}-${currentPage}-${layout}`}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             layout
//             className={
//               layout === "masonry"
//                 ? "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
//                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             }
//           >
//             {currentPhotos.map((photo) => (
//               <motion.div
//                 key={photo.id}
//                 variants={itemVariants}
//                 layoutId={`photo-${photo.id}`}
//                 className={`group relative cursor-pointer break-inside-avoid ${layout === "masonry" ? "mb-6" : ""}`}
//                 onClick={() => setSelectedPhoto(photo)}
//                 onKeyDown={(e) => e.key === "Enter" && setSelectedPhoto(photo)}
//                 tabIndex={0}
//                 role="button"
//                 aria-label={`View photo: ${photo.title}`}
//               >
//                 <div className={`relative rounded-xl overflow-hidden border transition-all duration-300 ${
//                   theme === "dark"
//                     ? "border-[#30363D] bg-[#161B22]"
//                     : "border-[#E5E7EB] bg-white"
//                 } shadow-sm hover:shadow-xl hover:shadow-blue-500/10`}>
                  
//                   {photo.featured && (
//                     <div className="absolute top-3 right-3 z-20">
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg"
//                       >
//                         Featured
//                       </motion.div>
//                     </div>
//                   )}

//                   <div className={layout === "grid" ? "aspect-square" : ""}>
//                     <SmoothImage 
//                         src={photo.imageUrl} 
//                         alt={photo.title} 
//                         className=""
//                         layout={layout}
//                     />
                    
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
//                         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                             <h3 className="text-white font-bold text-lg leading-tight mb-1">
//                                 {photo.title}
//                             </h3>
//                             {photo.location && (
//                                 <p className="text-gray-300 text-xs flex items-center gap-1.5 mb-3">
//                                 <MapPin className="w-3 h-3" />
//                                 {photo.location}
//                                 </p>
//                             )}
//                             <div className="flex items-center justify-between">
//                                 <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs text-white/90 border border-white/10">
//                                     {photo.category}
//                                 </span>
//                                 <div className="bg-white/20 p-1.5 rounded-full">
//                                     <ZoomIn className="w-4 h-4 text-white" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="absolute top-3 left-3 z-20">
//                     <motion.button
//                       whileTap={{ scale: 0.9 }}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleLike(photo.id);
//                       }}
//                       className={`p-2 rounded-full backdrop-blur-md transition-all shadow-lg ${
//                         likedPhotos.has(photo.id)
//                           ? "bg-red-500 text-white"
//                           : "bg-black/30 text-white hover:bg-black/50"
//                       }`}
//                       aria-label={likedPhotos.has(photo.id) ? "Unlike photo" : "Like photo"}
//                     >
//                       <Heart className={`w-4 h-4 ${likedPhotos.has(photo.id) ? "fill-current" : ""}`} />
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* Empty State */}
//         {processedPhotos.length === 0 && (
//           <div className="text-center py-24 px-4">
//             <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
//                 theme === "dark" ? "bg-gray-800" : "bg-gray-100"
//             }`}>
//                 <Camera className={`w-10 h-10 opacity-50 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
//             </div>
//             <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>No photos found</h3>
//             <p className={`max-w-md mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//               We couldn't find any photos in the "{selectedCategory}" category. Try selecting a different category or clearing your filters.
//             </p>
//           </div>
//         )}

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-6">
//             <div className="flex items-center gap-2">
//               <Button
//                 onClick={() => paginate(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 variant="outline"
//                 size="sm"
//                 className={`transition-all ${
//                   theme === "dark"
//                     ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D] text-gray-300"
//                     : "bg-white hover:bg-gray-50 text-gray-700"
//                 }`}
//               >
//                 <ChevronLeft className="w-4 h-4 mr-1" />
//                 Previous
//               </Button>

//               <div className="flex items-center gap-1 mx-2">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => paginate(page)}
//                     className={`w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200 ${
//                       currentPage === page
//                         ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110"
//                         : theme === "dark"
//                         ? "text-gray-400 hover:bg-[#30363D]"
//                         : "text-gray-600 hover:bg-gray-200"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//               </div>

//               <Button
//                 onClick={() => paginate(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 variant="outline"
//                 size="sm"
//                 className={`transition-all ${
//                   theme === "dark"
//                     ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D] text-gray-300"
//                     : "bg-white hover:bg-gray-50 text-gray-700"
//                 }`}
//               >
//                 Next
//                 <ChevronRight className="w-4 h-4 ml-1" />
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className={`mt-12 p-8 rounded-2xl border relative overflow-hidden ${
//             theme === "dark"
//               ? "bg-gradient-to-br from-[#161B22] to-[#21262D] border-[#30363D]"
//               : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
//           }`}
//         >
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
//             <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
//                 {[
//                     { label: "Total Photos", value: myPhotos.length },
//                     { label: "Categories", value: categories.length - 1 },
//                     { label: "Favorites", value: likedPhotos.size },
//                     { label: "Featured", value: myPhotos.filter(p => p.featured).length },
//                     { label: "Active Year", value: "2025" }
//                 ].map((stat, idx) => (
//                     <div key={idx} className="text-center group cursor-default">
//                         <div className={`text-3xl font-black mb-1 transition-colors duration-300 ${
//                             theme === "dark" ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
//                         }`}>
//                             {stat.value}
//                         </div>
//                         <div className={`text-xs uppercase tracking-wider font-semibold ${
//                             theme === "dark" ? "text-gray-500" : "text-gray-400"
//                         }`}>
//                             {stat.label}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </motion.div>
//       </CardContent>

//       {/* Interactive Lightbox */}
//       {mounted && createPortal(
//         <AnimatePresence>
//           {selectedPhoto && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
//               onClick={() => setSelectedPhoto(null)}
//             >
//               {/* Nav Controls */}
//               <button 
//                   onClick={(e) => { e.stopPropagation(); navigatePhoto("prev"); }}
//                   className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
//                   aria-label="Previous photo"
//               >
//                   <ChevronLeft className="w-8 h-8" />
//               </button>
              
//               <button 
//                   onClick={(e) => { e.stopPropagation(); navigatePhoto("next"); }}
//                   className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
//                   aria-label="Next photo"
//               >
//                   <ChevronRight className="w-8 h-8" />
//               </button>

//               <motion.div
//                 layoutId={`photo-${selectedPhoto.id}`}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className={`relative w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl ${
//                   theme === "dark" ? "bg-[#161B22]" : "bg-white"
//                 }`}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 dragElastic={0.2}
//                 onDragEnd={(e, { offset, velocity }) => {
//                   const swipe = Math.abs(offset.x) * velocity.x;
//                   if (swipe < -10000) navigatePhoto("next");
//                   if (swipe > 10000) navigatePhoto("prev");
//                 }}
//               >
//                 <button
//                   onClick={() => setSelectedPhoto(null)}
//                   className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors backdrop-blur-sm"
//                   aria-label="Close"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 {/* Image Section */}
//                 <div className="relative bg-black flex items-center justify-center flex-grow md:w-3/4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
//                   <AnimatePresence mode="wait">
//                       <motion.img
//                           key={selectedPhoto.id}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           src={selectedPhoto.imageUrl}
//                           alt={selectedPhoto.title}
//                           className="max-w-full max-h-[50vh] md:max-h-[90vh] w-auto h-auto object-contain"
//                           draggable="false"
//                       />
//                   </AnimatePresence>
//                 </div>

//                 {/* Details Section */}
//                 <div className={`flex flex-col md:w-1/4 overflow-y-auto ${
//                     theme === "dark" ? "bg-[#161B22]" : "bg-white"
//                 }`}>
//                   <div className="p-6 md:p-8 flex flex-col h-full">
//                       <div className="mb-6">
//                           <div className="flex items-center gap-2 mb-2">
//                                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
//                                    theme === "dark" ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-700"
//                                }`}>
//                                    {selectedPhoto.category}
//                                </span>
//                                {selectedPhoto.featured && (
//                                   <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
//                                       Star
//                                   </span>
//                                )}
//                           </div>
//                           <h2 className={`text-2xl font-bold leading-tight ${
//                               theme === "dark" ? "text-white" : "text-gray-900"
//                           }`}>
//                               {selectedPhoto.title}
//                           </h2>
//                       </div>

//                       <div className="space-y-4 flex-grow">
//                            {selectedPhoto.description && (
//                               <p className={`text-sm leading-relaxed ${
//                                   theme === "dark" ? "text-gray-300" : "text-gray-600"
//                               }`}>
//                                   {selectedPhoto.description}
//                               </p>
//                           )}
                          
//                           <div className={`space-y-3 pt-4 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-100"}`}>
//                                {[
//                                    { icon: MapPin, value: selectedPhoto.location },
//                                    { icon: Calendar, value: selectedPhoto.date },
//                                    { icon: Camera, value: selectedPhoto.camera }
//                                ].map((item, i) => item.value && (
//                                    <div key={i} className="flex items-center gap-3">
//                                        <item.icon className={`w-4 h-4 ${theme === "dark" ? "text-blue-400" : "text-blue-500"}`} />
//                                        <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//                                            {item.value}
//                                        </span>
//                                    </div>
//                                ))}
//                           </div>
//                       </div>

//                       <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
//                           <Button
//                               variant="outline"
//                               className={`flex-1 ${theme === "dark" ? "border-gray-700 hover:bg-gray-800" : ""}`}
//                               onClick={() => toggleLike(selectedPhoto.id)}
//                           >
//                               <Heart className={`w-4 h-4 mr-2 ${
//                                   likedPhotos.has(selectedPhoto.id) ? "fill-current text-red-500" : ""
//                               }`} />
//                               {likedPhotos.has(selectedPhoto.id) ? "Liked" : "Like"}
//                           </Button>
//                           <Button
//                               className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
//                               asChild
//                           >
//                               <a href={selectedPhoto.imageUrl} download target="_blank" rel="noopener noreferrer">
//                                   <Download className="w-4 h-4 mr-2" />
//                                   Save
//                               </a>
//                           </Button>
//                       </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>,
//         document.body
//       )}
//     </Card>
//   );
// }






"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Camera,
  X,
  Download,
  Heart,
  MapPin,
  Calendar,
  Aperture,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  SortAsc,
  Grid3x3,
  Rows3,
  Loader2,
} from "lucide-react";

// --- Types ---
interface Photo {
  id: string;
  title: string;
  imageUrl: string;
  location?: string;
  date?: string;
  camera?: string;
  description?: string;
  category: string;
  orientation?: "landscape" | "portrait" | "square";
  featured?: boolean;
}

interface PhotographyProps {
  theme: "light" | "dark";
}

// --- Data ---
const myPhotos: Photo[] = [
  {
    id: "1",
    title: "Lakeside Muscovy Portrait",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0993_foiewg.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A low-angle, cinematic portrait of a Muscovy duck standing on grass, framed against a lake fountain and overcast sky.",
    category: "Wildlife",
    orientation: "portrait",
    featured: true
  },
  {
    id: "2",
    title: "Lakeside Muscovy Duo",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1108_xhikjl.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A wide, cinematic shot of two Muscovy ducks standing on a grassy bank, looking out over a rainy lake with a clubhouse in the distance, framed by dark foliage on the right.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "3",
    title: "Curious Muscovy Gaze",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0978_tztmsm.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A close-up, cinematic portrait of a Muscovy duck on a grassy bank, gazing inquisitively into the lens with a soft, blurred residential backdrop.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "5",
    title: "Twilight Traffic Motion",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_1247_kuowya.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic long-exposure landscape capturing the motion blur of passing cars against a backdrop of a warm-lit building and palm trees during blue hour.",
    category: "Urban",
    orientation: "landscape",
    featured: true
  },
  {
    id: "6",
    title: "Inquisitive Muscovy Profile",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272697/IMG_0972_zlhjck.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic, low-angle shot of a Muscovy duck stretching its neck forward to investigate the grass, set against a blurred background of palm trees and apartments.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "7",
    title: "Fading Floral Melancholy",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1511_avz6vn.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A moody, cinematic top-down shot of fading white roses resting on a bed of dark green clover, capturing the delicate textures of withered petals in low light.",
    category: "Nature",
    orientation: "landscape"
  },
  {
    id: "8",
    title: "Shadowed Solitude on Green",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272701/IMG_1811_c1cuo5.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic, high-angle shot of a Muscovy duck traversing a vibrant green lawn, with high-contrast lighting casting deep shadows that highlight the texture of the grass.",
    category: "Wildlife",
    orientation: "landscape"
  },
  {
    id: "9",
    title: "Geometric Urban Glow",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0283_tkxvrf.jpg",
    location: "Boca Raton, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A minimalist, cinematic shot of a modern street lamp with glowing geometric fixtures, contrasting against the rhythmic grid of a grey building facade at twilight.",
    category: "Urban",
    orientation: "landscape"
  },
  {
    id: "10",
    title: "Grazing Muscovy Close-Up",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_2081_it9gfz.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A candid, cinematic profile shot of a Muscovy duck grazing in the grass with its beak open, framed against a soft, blurred background of a tiled roof and sky.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "11",
    title: "Skyward Iguana Sentry",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0247_dcw2ah.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic low-angle shot of a green iguana perched high on a tiled roof corner, framed by palm fronds and white gutters against a cloudy blue sky.",
    category: "Wildlife",
    orientation: "landscape"
  },
  {
    id: "12",
    title: "Lakeside Ibis Stroll",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_1776_patk8p.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic wide shot of an American White Ibis standing on a vibrant green bank, its white plumage contrasting sharply against the deep blue water of the lake.",
    category: "Wildlife",
    orientation: "landscape"
  },
  {
    id: "13",
    title: "Solitary Night Light",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0399_eng4ft.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A minimalist, cinematic shot of a single street lamp glowing against an absolute black void, highlighting the isolation and calm of the night.",
    category: "Urban",
    orientation: "landscape"
  },
  {
    id: "14",
    title: "Mail Center Solitude",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0252_kxnh8s.jpg",
    location: "Citation Club Apartments",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic night shot capturing a solitary figure silhouetted against the warm, inviting glow of an outdoor mail center, framed by deep shadows and architectural pillars.",
    category: "Urban",
    orientation: "landscape"
  },
  {
    id: "15",
    title: "Flight Over Dark Waters",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_1869_cfjiwq.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic action shot of a white bird taking flight over dark, rippling lake water, its wings spread wide against the deep blue contrast and green grassy bank.",
    category: "Wildlife",
    orientation: "landscape",
    featured: true
  },
  {
    id: "16",
    title: "Rain-Soaked Muscovy Lookback",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_1080_jczzts.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic portrait of a Muscovy duck standing in the rain on a grassy bank, looking back over its shoulder with water droplets clinging to its iridescent feathers.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "17",
    title: "Stone Perch Sentinel",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275066/IMG_0912_ogxzfz.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic close-up of a brown lizard resting on a weathered concrete paver, its textured scales detailed against a soft, blurred background of garden grass.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "18",
    title: "Nocturnal Fender Lines",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3884_zcbo9q.jpg",
    location: "Lakeworth, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic, high-angle detail shot of a white car's front fender and alloy wheel, capturing the sleek body curves under artificial night lighting.",
    category: "Automotive",
    orientation: "portrait"
  },
  {
    id: "19",
    title: "High Altitude Howdy",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_4017_jfvmqv.jpg",
    location: "In Flight",
    date: "2025",
    camera: "iPhone 13 Pro",
    description: "A cinematic vertical shot from an airplane window, capturing the winglet silhouette against a vibrant orange sunset horizon and a sea of clouds below.",
    category: "Travel",
    orientation: "portrait"
  },
  {
    id: "20",
    title: "Twilight Transit Motion",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3890_v5e2pj.jpg",
    location: "Roadside",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic, abstract motion blur shot of vehicle lights streaking in red and gold horizontal lines against a deep twilight sky, capturing the energy of travel.",
    category: "Abstract",
    orientation: "portrait"
  },
  {
    id: "21",
    title: "Grainy Blue Hour Lamp",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3942_nigpkb.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm yellow against a deep, grainy blue twilight sky, emphasizing negative space.",
    category: "Urban",
    orientation: "portrait"
  },
  {
    id: "22",
    title: "Rain-Kissed Side View",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3919_l2unr2.jpg",
    location: "Car Interior",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A moody, cinematic vertical shot through a rain-streaked car window, focusing on the intricate pattern of water droplets with a blurred white side mirror in the background.",
    category: "Abstract",
    orientation: "portrait"
  },
  {
    id: "23",
    title: "Sleek Fender Profile",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275805/IMG_3885_zzm2b8.jpg",
    location: "Lakeworth, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic, high-angle close-up of a white car's front profile, showcasing the sleek fender lines and alloy wheel details against the texture of a paved surface at night.",
    category: "Automotive",
    orientation: "portrait"
  },
  {
    id: "24",
    title: "Blue Hour Minimalist Lamp",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275865/IMG_3943_g2gmok.jpg",
    location: "Delray Beach",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A minimalist, cinematic vertical shot of a solitary street lamp glowing warm against a clean, deep blue twilight sky, emphasizing negative space and simplicity.",
    category: "Urban",
    orientation: "portrait"
  },
  {
    id: "25",
    title: "Monochrome Roofline Geometry",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276528/IMG_3899_kvtpah.jpg",
    location: "Delray Beach",
    date: "2025",
    camera: "iPhone 13 Pro",
    description: "A cinematic, black and white vertical shot capturing the sharp geometric angles of a tiled roof against a moody, overcast sky, emphasizing architectural texture.",
    category: "Architecture",
    orientation: "portrait"
  },
  {
    id: "26",
    title: "Tropical Tower Skyline",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/BF5AAB63-87A5-4E20-B814-CF020502C5A5_jkc8vr.jpg",
    location: "Lakeworth, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic landscape shot of a tall palm tree swaying against a deep teal sky, framing a beige architectural tower and billowing white clouds in the distance.",
    category: "Urban",
    orientation: "landscape"
  },
  {
    id: "27",
    title: "Rustic Muscovy Profile",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3895_rtvufc.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic, vertical close-up profile of a Muscovy duck, capturing the details of its beak and red facial caruncles against a textured background of dry grass.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "28",
    title: "Iridescent Muscovy Interaction",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3893_dgxnjn.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic vertical shot capturing a social moment between Muscovy ducks on a grassy bank, highlighting the vibrant iridescent purple and green sheen on the wings of the central bird.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "29",
    title: "Lakeside Trio Gathering",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/IMG_3897_eipxaj.jpg",
    location: "Delray Beach, Florida",
    date: "2025",
    camera: "Canon EOS R50",
    description: "A cinematic high-angle shot of three ducks standing on a vibrant green grassy bank next to the water, showcasing their varied brown and speckled plumage against the natural texture of the shoreline.",
    category: "Wildlife",
    orientation: "portrait"
  },
  {
    id: "30",
    title: "Tropical Twilight Silhouette",
    imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276530/62E4AAE9-57DA-4BA1-9952-8E37306F8FA4_o05pg0.jpg",
    location: "Lakeworth, Florida",
    date: "2025",
    camera: "iPhone 13 Pro",
    description: "A cinematic landscape shot of a tall palm tree silhouette centered against a gradient sky transitioning from deep blue to warm sunset orange.",
    category: "Nature",
    orientation: "landscape"
  }
];

// Auto-generate categories
const categories = ["All", ...Array.from(new Set(myPhotos.map(p => p.category))).sort()];
const photosPerPage = 12;

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

type SortOption = "newest" | "oldest" | "title";
type LayoutOption = "masonry" | "grid";

// --- Helper Component: SmoothImage ---
const SmoothImage = ({ src, alt, className, layout }: { src: string; alt: string; className: string; layout?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-900 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm z-0">
          <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative z-10 w-full ${layout === "grid" ? "h-full object-cover" : "h-auto"} transition-transform duration-700 hover:scale-105`}
        loading="lazy"
      />
    </div>
  );
};

export default function Photography({ theme }: PhotographyProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [layout, setLayout] = useState<LayoutOption>("masonry");
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhoto]);

  // Filter and sort photos
  const processedPhotos = useMemo(() => {
    const filtered = selectedCategory === "All"
      ? myPhotos
      : myPhotos.filter(photo => photo.category === selectedCategory);

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return parseInt(b.id) - parseInt(a.id);
        case "oldest":
          return parseInt(a.id) - parseInt(b.id);
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(processedPhotos.length / photosPerPage);
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = processedPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const toggleLike = (photoId: string) => {
    setLikedPhotos(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(photoId)) {
        newLikes.delete(photoId);
      } else {
        newLikes.add(photoId);
      }
      return newLikes;
    });
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigatePhoto = useCallback((direction: "next" | "prev") => {
    if (!selectedPhoto) return;
    const currentIndex = processedPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % processedPhotos.length;
    } else {
      newIndex = (currentIndex - 1 + processedPhotos.length) % processedPhotos.length;
    }
    setSelectedPhoto(processedPhotos[newIndex]);
  }, [selectedPhoto, processedPhotos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "ArrowRight") navigatePhoto("next");
      if (e.key === "ArrowLeft") navigatePhoto("prev");
      if (e.key === "Escape") setSelectedPhoto(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, navigatePhoto]);


  return (
    <Card
      className={`backdrop-blur-sm transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
          : "bg-white/80 border-[#E5E7EB] shadow-xl"
      }`}
    >
      <CardHeader>
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-xl">
                <Camera className="w-7 h-7 text-blue-500" />
              </div>
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Photography Portfolio
              </span>
            </CardTitle>

            <div className="flex gap-2 bg-gray-100/5 dark:bg-gray-800/30 p-1 rounded-xl">
              <button
                onClick={() => setLayout("masonry")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  layout === "masonry"
                    ? "bg-blue-500 text-white shadow-md"
                    : theme === "dark"
                    ? "text-gray-400 hover:bg-[#30363D] hover:text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                title="Masonry Layout"
                aria-label="Switch to Masonry Layout"
              >
                <Rows3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLayout("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  layout === "grid"
                    ? "bg-blue-500 text-white shadow-md"
                    : theme === "dark"
                    ? "text-gray-400 hover:bg-[#30363D] hover:text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                title="Grid Layout"
                aria-label="Switch to Grid Layout"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/20"
                      : theme === "dark"
                      ? "bg-[#21262D] text-gray-400 border-[#30363D] hover:border-gray-500 hover:text-white"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border w-full md:w-auto ${
                  theme === "dark"
                    ? "bg-[#21262D] border-[#30363D]"
                    : "bg-gray-50 border-gray-200"
                }`}>
                <SortAsc className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-transparent text-sm font-medium focus:outline-none w-full"
                  style={{ color: theme === "dark" ? "#e5e7eb" : "#374151" }}
                  aria-label="Sort photos"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border flex items-start gap-3 ${
              theme === "dark"
                ? "bg-blue-500/5 border-blue-500/20"
                : "bg-blue-50 border-blue-100"
            }`}
          >
            <Aperture className={`w-5 h-5 flex-shrink-0 mt-0.5 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <p className={`text-sm leading-relaxed ${
              theme === "dark" ? "text-blue-200" : "text-blue-900"
            }`}>
              Capturing moments and telling stories through the lens. Photography is my passion for exploring perspectives and preserving memories.
              {processedPhotos.length > 0 && (
                <span className="block mt-1 font-semibold opacity-80">
                  Showing {indexOfFirstPhoto + 1}-{Math.min(indexOfLastPhoto, processedPhotos.length)} of {processedPhotos.length} photos
                </span>
              )}
            </p>
          </motion.div>
        </div>
      </CardHeader>

      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${currentPage}-${layout}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
            className={
              layout === "masonry"
                ? "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
            {currentPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                layoutId={`photo-${photo.id}`}
                className={`group relative cursor-pointer break-inside-avoid ${layout === "masonry" ? "mb-6" : ""}`}
                onClick={() => setSelectedPhoto(photo)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedPhoto(photo)}
                tabIndex={0}
                role="button"
                aria-label={`View photo: ${photo.title}`}
              >
                <div className={`relative rounded-xl overflow-hidden border transition-all duration-300 ${
                  theme === "dark"
                    ? "border-[#30363D] bg-[#161B22]"
                    : "border-[#E5E7EB] bg-white"
                } shadow-sm hover:shadow-xl hover:shadow-blue-500/10`}>
                  
                  {photo.featured && (
                    <div className="absolute top-3 right-3 z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg"
                      >
                        Featured
                      </motion.div>
                    </div>
                  )}

                  <div className={layout === "grid" ? "aspect-square" : ""}>
                    <SmoothImage 
                        src={photo.imageUrl} 
                        alt={photo.title} 
                        className=""
                        layout={layout}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-bold text-lg leading-tight mb-1">
                                {photo.title}
                            </h3>
                            {photo.location && (
                                <p className="text-gray-300 text-xs flex items-center gap-1.5 mb-3">
                                <MapPin className="w-3 h-3" />
                                {photo.location}
                                </p>
                            )}
                            <div className="flex items-center justify-between">
                                <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs text-white/90 border border-white/10">
                                    {photo.category}
                                </span>
                                <div className="bg-white/20 p-1.5 rounded-full">
                                    <ZoomIn className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-3 left-3 z-20">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(photo.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all shadow-lg ${
                        likedPhotos.has(photo.id)
                          ? "bg-red-500 text-white"
                          : "bg-black/30 text-white hover:bg-black/50"
                      }`}
                      aria-label={likedPhotos.has(photo.id) ? "Unlike photo" : "Like photo"}
                    >
                      <Heart className={`w-4 h-4 ${likedPhotos.has(photo.id) ? "fill-current" : ""}`} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {processedPhotos.length === 0 && (
          <div className="text-center py-24 px-4">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}>
                <Camera className={`w-10 h-10 opacity-50 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>No photos found</h3>
            <p className={`max-w-md mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              We couldn&apos;t find any photos in the &quot;{selectedCategory}&quot; category. Try selecting a different category or clearing your filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-6">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className={`transition-all ${
                  theme === "dark"
                    ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D] text-gray-300"
                    : "bg-white hover:bg-gray-50 text-gray-700"
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex items-center gap-1 mx-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === page
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110"
                        : theme === "dark"
                        ? "text-gray-400 hover:bg-[#30363D]"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                className={`transition-all ${
                  theme === "dark"
                    ? "bg-[#21262D] hover:bg-[#30363D] border-[#30363D] text-gray-300"
                    : "bg-white hover:bg-gray-50 text-gray-700"
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`mt-12 p-8 rounded-2xl border relative overflow-hidden ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#161B22] to-[#21262D] border-[#30363D]"
              : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
          }`}
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {[
                    { label: "Total Photos", value: myPhotos.length },
                    { label: "Categories", value: categories.length - 1 },
                    { label: "Favorites", value: likedPhotos.size },
                    { label: "Featured", value: myPhotos.filter(p => p.featured).length },
                    { label: "Active Year", value: "2025" }
                ].map((stat, idx) => (
                    <div key={idx} className="text-center group cursor-default">
                        <div className={`text-3xl font-black mb-1 transition-colors duration-300 ${
                            theme === "dark" ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
                        }`}>
                            {stat.value}
                        </div>
                        <div className={`text-xs uppercase tracking-wider font-semibold ${
                            theme === "dark" ? "text-gray-500" : "text-gray-400"
                        }`}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
      </CardContent>

      {/* Interactive Lightbox */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              {/* Nav Controls */}
              <button 
                  onClick={(e) => { e.stopPropagation(); navigatePhoto("prev"); }}
                  className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
                  aria-label="Previous photo"
              >
                  <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                  onClick={(e) => { e.stopPropagation(); navigatePhoto("next"); }}
                  className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
                  aria-label="Next photo"
              >
                  <ChevronRight className="w-8 h-8" />
              </button>

              <motion.div
                layoutId={`photo-${selectedPhoto.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl ${
                  theme === "dark" ? "bg-[#161B22]" : "bg-white"
                }`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) navigatePhoto("next");
                  if (swipe > 10000) navigatePhoto("prev");
                }}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Section */}
                <div className="relative bg-black flex items-center justify-center flex-grow md:w-3/4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                  <AnimatePresence mode="wait">
                      <motion.img
                          key={selectedPhoto.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          src={selectedPhoto.imageUrl}
                          alt={selectedPhoto.title}
                          className="max-w-full max-h-[50vh] md:max-h-[90vh] w-auto h-auto object-contain"
                          draggable="false"
                      />
                  </AnimatePresence>
                </div>

                {/* Details Section */}
                <div className={`flex flex-col md:w-1/4 overflow-y-auto ${
                    theme === "dark" ? "bg-[#161B22]" : "bg-white"
                }`}>
                  <div className="p-6 md:p-8 flex flex-col h-full">
                      <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                               <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                                   theme === "dark" ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-700"
                               }`}>
                                   {selectedPhoto.category}
                               </span>
                               {selectedPhoto.featured && (
                                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
                                      Star
                                  </span>
                               )}
                          </div>
                          <h2 className={`text-2xl font-bold leading-tight ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                              {selectedPhoto.title}
                          </h2>
                      </div>

                      <div className="space-y-4 flex-grow">
                           {selectedPhoto.description && (
                              <p className={`text-sm leading-relaxed ${
                                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                              }`}>
                                  {selectedPhoto.description}
                              </p>
                          )}
                          
                          <div className={`space-y-3 pt-4 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-100"}`}>
                               {[
                                   { icon: MapPin, value: selectedPhoto.location },
                                   { icon: Calendar, value: selectedPhoto.date },
                                   { icon: Camera, value: selectedPhoto.camera }
                               ].map((item, i) => item.value && (
                                   <div key={i} className="flex items-center gap-3">
                                       <item.icon className={`w-4 h-4 ${theme === "dark" ? "text-blue-400" : "text-blue-500"}`} />
                                       <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                           {item.value}
                                       </span>
                                   </div>
                               ))}
                          </div>
                      </div>

                      <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                          <Button
                              variant="outline"
                              className={`flex-1 ${theme === "dark" ? "border-gray-700 hover:bg-gray-800" : ""}`}
                              onClick={() => toggleLike(selectedPhoto.id)}
                          >
                              <Heart className={`w-4 h-4 mr-2 ${
                                  likedPhotos.has(selectedPhoto.id) ? "fill-current text-red-500" : ""
                              }`} />
                              {likedPhotos.has(selectedPhoto.id) ? "Liked" : "Like"}
                          </Button>
                          <Button
                              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
                              asChild
                          >
                              <a href={selectedPhoto.imageUrl} download target="_blank" rel="noopener noreferrer">
                                  <Download className="w-4 h-4 mr-2" />
                                  Save
                              </a>
                          </Button>
                      </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Card>
  );
}