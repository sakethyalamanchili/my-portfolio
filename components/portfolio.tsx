// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";
// import dynamic from "next/dynamic";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   BookOpen,
//   Code,
//   GraduationCap,
//   Mail,
//   Briefcase,
//   User,
//   Award,
//   ChevronRight,
//   Moon,
//   Sun,
//   Menu,
// } from "lucide-react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaKaggle,
//   FaSnapchat,
//   FaMedium,
//   FaTwitter,
// } from "react-icons/fa";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// // Dynamically import client-side components
// const About = dynamic(() => import("./About"), { ssr: false });
// const Education = dynamic(() => import("./Education"), { ssr: false });
// const Experience = dynamic(() => import("./Experience"), { ssr: false });
// const Projects = dynamic(() => import("./Projects"), { ssr: false });
// const Skills = dynamic(() => import("./Skills"), { ssr: false });
// const BlogPosts = dynamic(() => import("./BlogPosts"), { ssr: false });
// const SnapchatFilters = dynamic(() => import("./SnapchatFilters"), {
//   ssr: false,
// });
// const Achievements = dynamic(() => import("./Achievements"), { ssr: false });

// interface BlogPost {
//   guid: string;
//   title: string;
//   pubDate: string;
//   link: string;
// }

// interface SnapchatFilter {
//   id: string;
//   name: string;
//   views: string;
//   link: string;
//   codeImage: string;
// }

// export default function Portfolio() {
//   const [mediumPosts, setMediumPosts] = useState<BlogPost[]>([]);
//   const [snapchatFilters, setSnapchatFilters] = useState<SnapchatFilter[]>([]);
//   const { theme, setTheme } = useTheme();
//   const [activeTab, setActiveTab] = useState("about");
//   const [isClient, setIsClient] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//     // Set the default theme to dark
//     setTheme("dark");

//     fetch(
//       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethyalamanchili"
//     )
//       .then((response) => response.json())
//       .then((data) => setMediumPosts(data.items));

//     setSnapchatFilters([
//       {
//         id: "1",
//         name: "low exposure sharp",
//         views: "15B+ counting",
//         link: "https://www.snapchat.com/lens/f6476c9100404360912c2f50c76be9f6?sender_web_id=4dea06cb-3692-4885-be38-f367bcd5959a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f6476c9100404360912c2f50c76be9f6&version=1&type=svg",
//       },
//       {
//         id: "2",
//         name: "MACBOOK BW x GRAIN",
//         views: "17B+ counting",
//         link: "https://www.snapchat.com/lens/3e3089b84f244bd7a3a692103a4d490d?type=SNAPCODE&metadata=01",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=3e3089b84f244bd7a3a692103a4d490d&version=1&type=svg",
//       },
//       {
//         id: "3",
//         name: "FILM CAM",
//         views: "13B+ counting",
//         link: "https://www.snapchat.com/lens/8cb9093d0af94467beaf241fbd5f8deb?sender_web_id=4454df49-3495-45f4-bc1c-7a8ebd809a3c&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=8cb9093d0af94467beaf241fbd5f8deb&version=1&type=svg",
//       },
//       {
//         id: "4",
//         name: "MACBOOK BNW",
//         views: "14B+ counting",
//         link: "https://www.snapchat.com/lens/738ca1236ade447f95287ee74e2f16ed?sender_web_id=41287078-3783-4d1c-8420-a4187b32c554&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=738ca1236ade447f95287ee74e2f16ed&version=1&type=svg",
//       },
//       {
//         id: "5",
//         name: "Vintage BNW",
//         views: "7B+ counting",
//         link: "https://www.snapchat.com/lens/f35c0c4968954be7bf3c0bf784876f45?sender_web_id=9827ed68-fa8e-443f-b6e1-394da543e03d&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f35c0c4968954be7bf3c0bf784876f45&version=1&type=svg",
//       },
//       {
//         id: "6",
//         name: "pretty",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/7a4097cae92745dd89e28619ab23b688?sender_web_id=2b0673a5-4717-49ca-9dda-904a73582353&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7a4097cae92745dd89e28619ab23b688&version=1&type=svg",
//       },
//       {
//         id: "7",
//         name: "DARK",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/e45121661d0e40dbac00adc71476f757?sender_web_id=9b91ee9c-92df-4bcf-94e7-2b374ea4a189&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e45121661d0e40dbac00adc71476f757&version=1&type=svg",
//       },
//       {
//         id: "8",
//         name: "Cupid Crown BW x G",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/052ebd1e4c3442688196bd4c4a5cb827?sender_web_id=2ba3b995-61b2-4936-ac84-f9d1cd4254b2&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=052ebd1e4c3442688196bd4c4a5cb827&version=1&type=svg",
//       },
//       {
//         id: "9",
//         name: "achromatic",
//         views: "4B+ counting",
//         link: "https://www.snapchat.com/lens/ab7c06e47fa24214b5a7cab13ed4310b?sender_web_id=3729ff05-f656-48eb-9058-2c4d3f7d6028&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=ab7c06e47fa24214b5a7cab13ed4310b&version=1&type=svg",
//       },
//       {
//         id: "10",
//         name: "low exposure",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/7c6bd6a9ab784a769deff5e64b7ecd00?sender_web_id=6e8a0a56-3aab-4a3c-979d-921c6c5c8f2f&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7c6bd6a9ab784a769deff5e64b7ecd00&version=1&type=svg",
//       },
//       {
//         id: "11",
//         name: "Cupid Crown",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/51609f9a55fe43ddbf4bafff47ff9d1a?sender_web_id=90a32dc7-07ed-4825-80b6-6cf9beb3a10a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=51609f9a55fe43ddbf4bafff47ff9d1a&version=1&type=svg",
//       },
//       {
//         id: "12",
//         name: "Deep moody",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/865823d263b249119832aa7adf948b42?sender_web_id=536efae2-a973-455b-ad1d-18f04112f7e8&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=865823d263b249119832aa7adf948b42&version=1&type=svg",
//       },
//       {
//         id: "13",
//         name: "Hearts Mood",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e5e21255b0ae4e60805196a9840ea8cd?sender_web_id=cc4d20de-e3c7-4481-91a1-e6796805f835&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e5e21255b0ae4e60805196a9840ea8cd&version=1&type=svg",
//       },
//       {
//         id: "14",
//         name: "BlossomBliss",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/c6c197f7c69d4cb5b4d96dc1256acd5d?sender_web_id=5251e0a9-92ea-490f-9df4-95dcdf2501ab&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=c6c197f7c69d4cb5b4d96dc1256acd5d&version=1&type=svg",
//       },
//       {
//         id: "15",
//         name: "Grainy BNW-2",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e4a239547c704a38b79b3cff3eaa6cc9?sender_web_id=43baf1ae-607e-401c-b59c-a6bcf4592840&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e4a239547c704a38b79b3cff3eaa6cc9&version=1&type=svg",
//       },
//       {
//         id: "16",
//         name: "BlossomBliss Grain",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/6725ccfebde24b3e8b54b6f4691788af?sender_web_id=06e625ff-aa4f-4690-b610-7d6123d6b16b&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=6725ccfebde24b3e8b54b6f4691788af&version=1&type=svg",
//       },
//       {
//         id: "17",
//         name: "Album BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a7dea132d23b4c5c9dc72788fdd9dc53&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8fa3c60e-8909-36b4-8863-e00e159c2446_320_3d2393da-2554-4a9d-b812-59b1d60bfc03.png",
//       },
//       {
//         id: "18",
//         name: "natural",
//         views: "1B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=255c7597286447cb8773c5668b1cac5a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b755e613-c4b2-3f59-b280-fde6b20eca5e_320_e9d5aeff-9ef3-4d90-98eb-1945ae57cbfc.png",
//       },
//       {
//         id: "19",
//         name: "Grainy BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fd7f029cb0064d88b73189f7b96837a9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7401f897-7aa6-3ccf-a941-4cf9a74a17ce_320_89fb184c-dbdd-4d9e-8cc1-dbe38ce87d1a.png",
//       },
//       {
//         id: "20",
//         name: "MACBOOK EFFECT",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8759a8433a15431ab0bc8e01a7a76942&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4af08aa8-0007-331f-829b-c080bfcd84f7_320_cb4fd0db-ee40-4450-9e28-ca184ab63279.png",
//       },
//       {
//         id: "21",
//         name: "Cross BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=452fc5100a7d442c84465048c35d098d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9fd585a9-3405-3930-8b8c-ad7e089c2631_320_fd77a151-8cb5-4fc5-80d7-4d26804b0b11.png",
//       },
//       {
//         id: "22",
//         name: "Days Of The Week",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2fa8db46bd78480a981b459b666e6303&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/87b25931-7b74-3175-8e96-68fea2711f04_320_4db2d92f-0b58-40f0-8f56-8569b55c29e6.png",
//       },
//       {
//         id: "23",
//         name: "Cupid Crown BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=599050da09bd4fa2862d546a4a12053a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a963296a-6226-3352-8721-57cf3cd9a249_320_fa02c3b4-414b-4542-a7b2-87da298714a7.png",
//       },
//       {
//         id: "24",
//         name: "BEAR BLISS x GRAIN",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=cf7b2e6888e8491882166f9b869b8d44&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/0d04dec7-2cee-363e-9e49-6f726764a66d_320_9ae94d99-3476-4040-88a9-98a8010bc029.png",
//       },
//       {
//         id: "25",
//         name: "M00DY",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7752170cc7914ad49fb23cbaf2bb48f7&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a9f40a8a-f909-31f0-9b60-57bed730baca_320_cbf61959-d849-4e03-b509-add173eb683f.png",
//       },
//       {
//         id: "26",
//         name: "VINTAGE",
//         views: "900M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=78b6463522784c788df69af5b2f49599&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8ed2035c-5a0e-3020-9d6e-a0a1d4f19bba_320_c8c9908b-60c6-44ba-9b79-b8192911fa82.png",
//       },
//       {
//         id: "27",
//         name: "Aesthetic day",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fc3aa25c44314298b596d3b63b2b00f1&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/10210439-4bc7-3b6d-a439-c445a0f99120_320_78b9a355-09ea-43eb-8619-05cf613c298e.png",
//       },
//       {
//         id: "28",
//         name: "Avril",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b428b183f43643e3b1d23f14409ec52c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/33896853-a5a4-3f24-9aaf-dc6a3aa3f1ea_320_1f3c8ca0-2c9d-4987-84a3-a4858b2d1908.png",
//       },
//       {
//         id: "29",
//         name: "70s Aesthetic",
//         views: "800M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d528500d0f914323a0823bfcf4799377&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7c5168d6-b79a-3979-9ae8-b923123a4396_320_f9deda53-0f4b-4918-80fb-b0aef001257d.png",
//       },
//       {
//         id: "30",
//         name: "Bella",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e1e05e070c294b4e8f00f2677aa38d46&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/bcac6e85-c893-35b6-a25b-4976e3610624_320_2fd61ec3-e0b1-4a9b-900c-ff6b6026a7ae.png",
//       },
//       {
//         id: "31",
//         name: "Arch BNW",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e080f723b6014e1c9941a86705e07970&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f45ccc5e-693b-36c3-94f5-488961bb9687_320_b28d9d5c-2392-4401-b58e-073ccbeb2878.png",
//       },
//       {
//         id: "32",
//         name: "snapshot",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f317dac77ad54627996f09adcd144746&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/544d8c75-31b5-39e2-adb2-c1df4d1fdd3e_320_775384f8-624f-45af-95c8-45cb10d73f27.png",
//       },
//       {
//         id: "33",
//         name: "Aloha",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f98615580a9b4a96a71063387e97624b&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/257666fb-3c81-3bf2-9f2c-4b49d37b6b46_320_49200826-fca3-4792-9f14-37a8b07b35dc.png",
//       },
//       {
//         id: "34",
//         name: "Ivy",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=94c4946752884e328a8c8e9f1c2d35dc&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/e2f948ce-734b-371a-870f-0a192e96754e_320_eef2c510-759c-4e18-9e13-5fb3b7f49239.png",
//       },
//       {
//         id: "35",
//         name: "Morana",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e2e129c6899472889818376fe7f1ef9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8e0e728a-323a-3646-b63f-5cc4732d8cb1_320_cf7daa38-9b9e-44f6-b3d3-3a52ea6264ea.png",
//       },
//       {
//         id: "36",
//         name: "Arch sharp",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=679ffbe93a1c491d97d0b5ce4bdf186d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/565a6145-6f91-3a79-86cb-6a12adfd4b81_320_7cfb3fad-f43e-4754-8a51-f402496b9f63.png",
//       },
//       {
//         id: "37",
//         name: "Moment in Time",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=72fb1cc43e8d41da87eb3c497e0cd80d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b359ac69-3714-300d-9c01-8072defdf3ba_320_16406347-c36b-4538-a028-1e52fa8a9ed6.png",
//       },
//       {
//         id: "38",
//         name: "Arch dark",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dcf884ae83de4fbeaa4163ebcadf4c5c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7ebc7b24-8d8a-3cde-813e-e411ca42e046_320_5c7e81c4-803d-4274-9766-f8df06d01f47.png",
//       },
//       {
//         id: "39",
//         name: "Galatea",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c80f57653cf44dcebe310014656e937c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/22aa90c3-0abb-39b6-bf38-f5c67d514414_320_5471aaba-3617-4798-b701-8783eea4e8db.png",
//       },
//       {
//         id: "40",
//         name: "Travis Scott",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8b3407496ee44670b7cd09029b93fa71&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/63c43ffb-6560-3b4d-9ea5-f4f38d96018e_320_bd3a6590-deab-48e7-81e9-a74c4eaf498f.png",
//       },
//       {
//         id: "41",
//         name: "vivid",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=122482f6280c4d9fbdf1cd05ef9cbd14&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/12bbcecf-b6ba-33eb-b8ba-4a0958a67ca0_320_47ae8e8c-2306-481b-8499-551cd4e4fca8.png",
//       },
//       {
//         id: "42",
//         name: "Halcyon",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5091ee5e271d433bba4e8b507320d3b5&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b8858a91-4a8e-3606-b47c-988ff637ab8b_320_583815e4-a6d9-441c-b2fa-6720b79c0681.png",
//       },
//       {
//         id: "43",
//         name: "Bear Bliss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=4ae2015aa2124abc9bd0de0487a2645f&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f3cf7ebc-7b4b-39ad-b590-9edf22deb77f_320_9403ea44-1029-436d-a1f4-66d64140048b.png",
//       },
//       {
//         id: "44",
//         name: "espresso",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aeea456d4c214543ad114bfbbb939965&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/5c07900f-0057-30f9-a12d-1ac889d69b93_320_60a29392-e6d1-41eb-a143-3eb4007685d3.png",
//       },
//       {
//         id: "45",
//         name: "TIME",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=35af50eb034e4b0291cc20247ccf40fa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/be0be1a7-cab1-344f-8d72-19307b343a39_320_b44d3e39-7e97-4e02-9bb6-b373a9e39336.png",
//       },
//       {
//         id: "46",
//         name: "Aphrodite Sharp",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7adcd126048c4fe5ac2519b2d6874032&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9a740fb3-0390-3513-8264-1ee6b39fa361_320_69ec0d3c-713b-4965-bdbf-851bddbc8c55.png",
//       },
//       {
//         id: "47",
//         name: "Polaroid-3",
//         views: "100M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f96ec8b95061478ea7545fdfe45e7b83&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7630ccd9-b788-37b1-a33f-47ee8f980e8e_320_53a1d4ed-3a54-4b24-9c69-9a3d565f2242.png",
//       },
//       {
//         id: "48",
//         name: "Aesthetic crown V2",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=766f9afd452849f9ad8d8a61aaba76aa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/117241d1-8482-3226-87b6-8d97d05fb640_320_59aa4b9c-164e-4acc-910a-52acd51694a3.png",
//       },
//       {
//         id: "49",
//         name: "Butterfly Kiss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0802837f1b604525adeaf86433838d54&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/16e7deae-f8d0-3117-bd70-a9860e3b4abe_320_6e6e1f24-bf6b-470c-be8e-7e601021d275.png",
//       },
//       {
//         id: "50",
//         name: "FILM CAM x MOCHA",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=abbcf62da0f543bbaefdca897bb34302&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4029e868-6ac2-38d6-88e4-c505ced9fecf_320_86c81e0d-facd-4708-8fcd-20276a956035.png",
//       },
//     ]);
//   }, [setTheme]);

//   const tabVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const sidebarVariants = {
//     hidden: { x: -300 },
//     visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   const navItems = [
//     { id: "about", icon: User, label: "About" },
//     { id: "experience", icon: Briefcase, label: "Experience" },
//     { id: "education", icon: GraduationCap, label: "Education" },
//     { id: "projects", icon: Code, label: "Projects" },
//     { id: "skills", icon: ChevronRight, label: "Skills" },
//     { id: "achievements", icon: Award, label: "Achievements" },
//     { id: "blog", icon: BookOpen, label: "Blog Posts" },
//     { id: "snapchat", icon: FaSnapchat, label: "Snapchat Filters" },
//   ];

//   const socialLinks = [
//     {
//       icon: FaGithub,
//       href: "https://github.com/sakethyalamanchili",
//       label: "GitHub",
//     },
//     {
//       icon: FaLinkedin,
//       href: "https://www.linkedin.com/in/sakethyalamanchili/",
//       label: "LinkedIn",
//     },
//     {
//       icon: FaKaggle,
//       href: "https://www.kaggle.com/sakethyalamanchili",
//       label: "Kaggle",
//     },
//     { icon: Mail, href: "mailto:syalamanchil2025@fau.edu", label: "Email" },
//     {
//       icon: FaSnapchat,
//       href: "https://www.snapchat.com/add/saketh05",
//       label: "Snapchat",
//     },
//     {
//       icon: FaMedium,
//       href: "https://medium.com/@sakethyalamanchili",
//       label: "Medium",
//     },
//     { icon: FaTwitter, href: "https://x.com/Saketh05_", label: "Twitter" },
//   ];

//   if (!isClient) {
//     return null;
//   }

//   const Sidebar = ({ isMobile = false }) => (
//     <ScrollArea className="h-full">
//       <div className="flex flex-col h-full px-4 py-6">
//         <div className="flex flex-col items-center mb-8">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//           >
//             <Avatar className="w-32 h-32 mb-4">
//               <AvatarImage
//                 src="https://github.com/sakethyalamanchili.png"
//                 alt="Saketh Yalamanchili"
//               />
//               <AvatarFallback>SY</AvatarFallback>
//             </Avatar>
//           </motion.div>
//           <motion.h1
//             className="text-xl font-bold mb-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Saketh Yalamanchili
//           </motion.h1>
//           <motion.p
//             className={`text-sm text-center ${
//               theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
//             }`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Data Scientist | Software Developer | AR Creator
//           </motion.p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-1 mb-6">
//           {socialLinks.map((link, index) => (
//             <TooltipProvider key={index}>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <motion.a
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-1.5 rounded-full ${
//                       theme === "dark"
//                         ? "hover:bg-[#21262D]"
//                         : "hover:bg-[#E5E7EB]"
//                     }`}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <link.icon className="h-4 w-4" />
//                   </motion.a>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>{link.label}</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           ))}
//         </div>
//         <nav className="flex-grow">
//           <ul className="space-y-2">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * index }}
//               >
//                 <Button
//                   variant="ghost"
//                   className={`w-full justify-start ${
//                     activeTab === item.id
//                       ? theme === "dark"
//                         ? "bg-[#21262D] text-white"
//                         : "bg-[#E5E7EB] text-[#1F2937]"
//                       : ""
//                   }`}
//                   onClick={() => {
//                     setActiveTab(item.id);
//                     if (isMobile) {
//                       setIsMobileMenuOpen(false);
//                     }
//                   }}
//                 >
//                   <item.icon className="mr-2 h-4 w-4" />
//                   {item.label}
//                 </Button>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </ScrollArea>
//   );

//   return (
//     <div
//       className={`min-h-screen ${
//         theme === "dark" ? "bg-[#0E1116] text-white" : "bg-white text-[#1F2937]"
//       }`}
//     >
//       <div className="flex flex-col md:flex-row">
//         {/* Mobile header */}
//         <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon">
//                 <Menu className="h-4 w-4" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="left"
//               className={`w-64 p-0 ${
//                 theme === "dark"
//                   ? "bg-[#161B22] border-r border-[#30363D]"
//                   : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
//               }`}
//             >
//               <Sidebar isMobile={true} />
//             </SheetContent>
//           </Sheet>
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <Switch
//               checked={theme === "dark"}
//               onCheckedChange={() =>
//                 setTheme(theme === "dark" ? "light" : "dark")
//               }
//             />
//           </motion.div>
//         </div>

//         {/* Desktop sidebar */}
//         <motion.div
//           className={`hidden md:block w-64 h-screen fixed left-0 top-0 ${
//             theme === "dark"
//               ? "bg-[#161B22] border-r border-[#30363D]"
//               : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
//           }`}
//           initial="hidden"
//           animate="visible"
//           variants={sidebarVariants}
//         >
//           <Sidebar />
//         </motion.div>

//         {/* Main content */}
//         <motion.div
//           className="flex-1 p-4 md:p-8 md:ml-64"
//           initial="hidden"
//           animate="visible"
//           variants={contentVariants}
//         >
//           {/* Desktop theme toggle */}
//           <div className="hidden md:flex justify-end mb-4">
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <Switch
//                 checked={theme === "dark"}
//                 onCheckedChange={() =>
//                   setTheme(theme === "dark" ? "light" : "dark")
//                 }
//                 className="mr-2"
//               />
//             </motion.div>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               {theme === "dark" ? (
//                 <Moon className="h-5 w-5" />
//               ) : (
//                 <Sun className="h-5 w-5" />
//               )}
//             </motion.span>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={tabVariants}
//             >
//               {activeTab === "about" && (
//                 <About theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "experience" && (
//                 <Experience theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "education" && (
//                 <Education theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "projects" && (
//                 <Projects theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "skills" && (
//                 <Skills theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "achievements" && (
//                 <Achievements theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "blog" && (
//                 <Card
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#161B22] border-[#30363D]"
//                       : "bg-white border-[#E5E7EB]"
//                   }`}
//                 >
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-bold">
//                       Blog Posts
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <BlogPosts
//                       posts={mediumPosts}
//                       theme={theme === "dark" ? "dark" : "light"}
//                     />
//                   </CardContent>
//                 </Card>
//               )}
//               {activeTab === "snapchat" && (
//                 <Card
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#161B22] border-[#30363D]"
//                       : "bg-white border-[#E5E7EB]"
//                   }`}
//                 >
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-bold">
//                       Top 50 Snapchat Filters
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <SnapchatFilters
//                       filters={snapchatFilters}
//                       theme={theme === "dark" ? "dark" : "light"}
//                     />
//                   </CardContent>
//                 </Card>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";
// import dynamic from "next/dynamic";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   BookOpen,
//   Code,
//   GraduationCap,
//   Mail,
//   Briefcase,
//   User,
//   Award,
//   ChevronRight,
//   Moon,
//   Sun,
//   Menu,
//   ChevronDown,
//   Sparkles,
// } from "lucide-react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaKaggle,
//   FaSnapchat,
//   FaMedium,
//   FaInstagram,
// } from "react-icons/fa";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// // Dynamically import client-side components
// const About = dynamic(() => import("./About"), { ssr: false });
// const Education = dynamic(() => import("./Education"), { ssr: false });
// const Experience = dynamic(() => import("./Experience"), { ssr: false });
// const Projects = dynamic(() => import("./Projects"), { ssr: false });
// const Skills = dynamic(() => import("./Skills"), { ssr: false });
// const BlogPosts = dynamic(() => import("./BlogPosts"), { ssr: false });
// const SnapchatFilters = dynamic(() => import("./SnapchatFilters"), {
//   ssr: false,
// });
// const Achievements = dynamic(() => import("./Achievements"), { ssr: false });

// // Built-in Scroll to Top Component
// const ScrollToTop: React.FC<{ theme: "dark" | "light" }> = ({ theme }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={scrollToTop}
//           className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 ${
//             theme === "dark"
//               ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-blue-500/50"
//               : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-blue-400/50"
//           }`}
//         >
//           <ChevronDown className="w-6 h-6 rotate-180" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };


// interface BlogPost {
//   guid: string;
//   title: string;
//   pubDate: string;
//   link: string;
// }

// interface SnapchatFilter {
//   id: string;
//   name: string;
//   views: string;
//   link: string;
//   codeImage: string;
// }

// interface HeroSectionProps {
//   theme: "dark" | "light";
//   onExploreClick: () => void;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ theme, onExploreClick }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Counter animation hook
//   const useCounter = (end: number, duration: number = 2000) => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       let startTime: number;
//       let animationFrame: number;
//       const animate = (currentTime: number) => {
//         if (!startTime) startTime = currentTime;
//         const progress = Math.min((currentTime - startTime) / duration, 1);
//         setCount(Math.floor(progress * end));
//         if (progress < 1) animationFrame = requestAnimationFrame(animate);
//       };
//       animationFrame = requestAnimationFrame(animate);
//       return () => cancelAnimationFrame(animationFrame);
//     }, [end, duration]);
//     return count;
//   };

//   const viewsCount = useCounter(150);
//   const followersCount = useCounter(750);
//   const lensesCount = useCounter(300);
//   const gpaCount = useCounter(40) / 10;

//   const stats = [
//     { value: `${viewsCount}B+`, label: "Total Views", delay: 0, icon: "📊" },
//     { value: `${followersCount}K+`, label: "Followers", delay: 0.1, icon: "👥" },
//     { value: `${lensesCount}+`, label: "AR Lenses", delay: 0.2, icon: "🎨" },
//     { value: gpaCount.toFixed(1), label: "GPA", delay: 0.2, icon: "🎓" },
//   ];

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
//       {/* Enhanced Background with Grid Pattern */}
//       <div className="absolute inset-0">
//         <div
//           className={`absolute inset-0 transition-all duration-1000 ${
//             theme === "dark"
//               ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
//               : "bg-gradient-to-br from-white via-slate-50 to-white"
//           }`}
//         />
//         {/* Animated Grid */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px), linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}
//         />
//         {/* Gradient Orbs */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: mousePosition.x * 2,
//             y: mousePosition.y * 2,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: -mousePosition.x * 2,
//             y: -mousePosition.y * 2,
//             scale: [1, 1.3, 1],
//           }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-15"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: mousePosition.x * -1.5,
//             y: mousePosition.y * 1.5,
//             scale: [1, 1.15, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Floating Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="flex justify-center mb-8"
//           >
//             <motion.div
//               className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md ${
//                 theme === "dark"
//                   ? "bg-white/5 border-white/10"
//                   : "bg-gray-900/5 border-gray-900/10"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -5, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <Sparkles className="w-4 h-4 text-blue-400" />
//               <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 Available for Opportunities
//               </span>
//             </motion.div>
//           </motion.div>

//           {/* Subtitle */}
//           <motion.p
//             className={`text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 font-light ${
//               theme === "dark" ? "text-blue-400/70" : "text-blue-600/70"
//             }`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Data Scientist • Software Developer • AR Creator
//           </motion.p>

//           {/* Name with Enhanced Animation */}
//           <div className="mb-10 md:mb-12 px-2 sm:px-4 max-w-[90vw] mx-auto">
//             <h1
//               className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight text-balance ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}
//             >
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="block"
//               >
//                 SAKETH
//               </motion.span>
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="block relative"
//               >
//                 <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
//                   YALAMANCHILI
//                 </span>
//                 {/* Animated underline */}
//                 <motion.div
//                   className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </motion.span>
//             </h1>
//           </div>

//           {/* Enhanced Stats with Icons */}
//           <motion.div
//             className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 group overflow-hidden ${
//                   theme === "dark"
//                     ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
//                     : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10 hover:border-gray-900/20"
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.2 + stat.delay, duration: 0.6 }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                   boxShadow:
//                     theme === "dark"
//                       ? "0 20px 40px rgba(59, 130, 246, 0.3)"
//                       : "0 20px 40px rgba(0, 0, 0, 0.1)",
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Gradient background on hover */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 />
                
//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <motion.div 
//                     className="text-2xl mb-2"
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
//                   >
//                     {stat.icon}
//                   </motion.div>
                  
//                   <motion.div
//                     className={`text-3xl md:text-4xl lg:text-5xl font-extralight mb-2 ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {stat.value}
//                   </motion.div>
//                   <div
//                     className={`text-xs md:text-sm font-light tracking-wider uppercase ${
//                       theme === "dark" ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {stat.label}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Enhanced CTA Button */}
//           <motion.button
//             onClick={onExploreClick}
//             className={`relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-500 border text-sm md:text-base font-light tracking-wide min-h-[44px] min-w-[44px] group ${
//               theme === "dark"
//                 ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white backdrop-blur-xl"
//                 : "bg-gray-900/5 hover:bg-gray-900/10 border-gray-900/10 hover:border-gray-900/20 text-gray-900 backdrop-blur-xl"
//             }`}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.8, duration: 0.5 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 theme === "dark"
//                   ? "0 20px 40px rgba(59, 130, 246, 0.4)"
//                   : "0 20px 40px rgba(0, 0, 0, 0.15)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Animated gradient background */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
//               animate={{
//                 x: ["-100%", "100%"],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
            
//             <span className="relative z-10 flex items-center gap-2">
//               Explore My Work
//               <motion.span
//                 animate={{ x: [0, 4, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 →
//               </motion.span>
//             </span>
//           </motion.button>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, y: [0, 8, 0] }}
//           transition={{ delay: 2, duration: 2, repeat: Infinity }}
//         >
//           <ChevronDown
//             className={`w-5 h-5 ${
//               theme === "dark" ? "text-gray-500" : "text-gray-400"
//             }`}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default function Portfolio() {
//   const [mediumPosts, setMediumPosts] = useState<BlogPost[]>([]);
//   const [snapchatFilters, setSnapchatFilters] = useState<SnapchatFilter[]>([]);
//   const { theme, setTheme } = useTheme();
//   const [activeTab, setActiveTab] = useState("hero");
//   const [isClient, setIsClient] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showHero, setShowHero] = useState(true);

//   useEffect(() => {
//     setIsClient(true);
//     // Set the default theme to dark
//     setTheme("dark");

//     fetch(
//       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethyalamanchili"
//     )
//       .then((response) => response.json())
//       .then((data) => setMediumPosts(data.items));

//     setSnapchatFilters([
//       {
//         id: "1",
//         name: "low exposure sharp",
//         views: "15B+ counting",
//         link: "https://www.snapchat.com/lens/f6476c9100404360912c2f50c76be9f6?sender_web_id=4dea06cb-3692-4885-be38-f367bcd5959a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f6476c9100404360912c2f50c76be9f6&version=1&type=svg",
//       },
//       {
//         id: "2",
//         name: "MACBOOK BW x GRAIN",
//         views: "17B+ counting",
//         link: "https://www.snapchat.com/lens/3e3089b84f244bd7a3a692103a4d490d?type=SNAPCODE&metadata=01",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=3e3089b84f244bd7a3a692103a4d490d&version=1&type=svg",
//       },
//       {
//         id: "3",
//         name: "FILM CAM",
//         views: "13B+ counting",
//         link: "https://www.snapchat.com/lens/8cb9093d0af94467beaf241fbd5f8deb?sender_web_id=4454df49-3495-45f4-bc1c-7a8ebd809a3c&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=8cb9093d0af94467beaf241fbd5f8deb&version=1&type=svg",
//       },
//       {
//         id: "4",
//         name: "MACBOOK BNW",
//         views: "14B+ counting",
//         link: "https://www.snapchat.com/lens/738ca1236ade447f95287ee74e2f16ed?sender_web_id=41287078-3783-4d1c-8420-a4187b32c554&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=738ca1236ade447f95287ee74e2f16ed&version=1&type=svg",
//       },
//       {
//         id: "5",
//         name: "Vintage BNW",
//         views: "7B+ counting",
//         link: "https://www.snapchat.com/lens/f35c0c4968954be7bf3c0bf784876f45?sender_web_id=9827ed68-fa8e-443f-b6e1-394da543e03d&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f35c0c4968954be7bf3c0bf784876f45&version=1&type=svg",
//       },
//       {
//         id: "6",
//         name: "pretty",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/7a4097cae92745dd89e28619ab23b688?sender_web_id=2b0673a5-4717-49ca-9dda-904a73582353&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7a4097cae92745dd89e28619ab23b688&version=1&type=svg",
//       },
//       {
//         id: "7",
//         name: "DARK",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/e45121661d0e40dbac00adc71476f757?sender_web_id=9b91ee9c-92df-4bcf-94e7-2b374ea4a189&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e45121661d0e40dbac00adc71476f757&version=1&type=svg",
//       },
//       {
//         id: "8",
//         name: "Cupid Crown BW x G",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/052ebd1e4c3442688196bd4c4a5cb827?sender_web_id=2ba3b995-61b2-4936-ac84-f9d1cd4254b2&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=052ebd1e4c3442688196bd4c4a5cb827&version=1&type=svg",
//       },
//       {
//         id: "9",
//         name: "achromatic",
//         views: "4B+ counting",
//         link: "https://www.snapchat.com/lens/ab7c06e47fa24214b5a7cab13ed4310b?sender_web_id=3729ff05-f656-48eb-9058-2c4d3f7d6028&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=ab7c06e47fa24214b5a7cab13ed4310b&version=1&type=svg",
//       },
//       {
//         id: "10",
//         name: "low exposure",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/7c6bd6a9ab784a769deff5e64b7ecd00?sender_web_id=6e8a0a56-3aab-4a3c-979d-921c6c5c8f2f&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7c6bd6a9ab784a769deff5e64b7ecd00&version=1&type=svg",
//       },
//       {
//         id: "11",
//         name: "Cupid Crown",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/51609f9a55fe43ddbf4bafff47ff9d1a?sender_web_id=90a32dc7-07ed-4825-80b6-6cf9beb3a10a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=51609f9a55fe43ddbf4bafff47ff9d1a&version=1&type=svg",
//       },
//       {
//         id: "12",
//         name: "Deep moody",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/865823d263b249119832aa7adf948b42?sender_web_id=536efae2-a973-455b-ad1d-18f04112f7e8&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=865823d263b249119832aa7adf948b42&version=1&type=svg",
//       },
//       {
//         id: "13",
//         name: "Hearts Mood",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e5e21255b0ae4e60805196a9840ea8cd?sender_web_id=cc4d20de-e3c7-4481-91a1-e6796805f835&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e5e21255b0ae4e60805196a9840ea8cd&version=1&type=svg",
//       },
//       {
//         id: "14",
//         name: "BlossomBliss",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/c6c197f7c69d4cb5b4d96dc1256acd5d?sender_web_id=5251e0a9-92ea-490f-9df4-95dcdf2501ab&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=c6c197f7c69d4cb5b4d96dc1256acd5d&version=1&type=svg",
//       },
//       {
//         id: "15",
//         name: "Grainy BNW-2",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e4a239547c704a38b79b3cff3eaa6cc9?sender_web_id=43baf1ae-607e-401c-b59c-a6bcf4592840&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e4a239547c704a38b79b3cff3eaa6cc9&version=1&type=svg",
//       },
//       {
//         id: "16",
//         name: "BlossomBliss Grain",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/6725ccfebde24b3e8b54b6f4691788af?sender_web_id=06e625ff-aa4f-4690-b610-7d6123d6b16b&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=6725ccfebde24b3e8b54b6f4691788af&version=1&type=svg",
//       },
//       {
//         id: "17",
//         name: "Album BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a7dea132d23b4c5c9dc72788fdd9dc53&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8fa3c60e-8909-36b4-8863-e00e159c2446_320_3d2393da-2554-4a9d-b812-59b1d60bfc03.png",
//       },
//       {
//         id: "18",
//         name: "natural",
//         views: "1B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=255c7597286447cb8773c5668b1cac5a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b755e613-c4b2-3f59-b280-fde6b20eca5e_320_e9d5aeff-9ef3-4d90-98eb-1945ae57cbfc.png",
//       },
//       {
//         id: "19",
//         name: "Grainy BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fd7f029cb0064d88b73189f7b96837a9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7401f897-7aa6-3ccf-a941-4cf9a74a17ce_320_89fb184c-dbdd-4d9e-8cc1-dbe38ce87d1a.png",
//       },
//       {
//         id: "20",
//         name: "MACBOOK EFFECT",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8759a8433a15431ab0bc8e01a7a76942&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4af08aa8-0007-331f-829b-c080bfcd84f7_320_cb4fd0db-ee40-4450-9e28-ca184ab63279.png",
//       },
//       {
//         id: "21",
//         name: "Cross BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=452fc5100a7d442c84465048c35d098d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9fd585a9-3405-3930-8b8c-ad7e089c2631_320_fd77a151-8cb5-4fc5-80d7-4d26804b0b11.png",
//       },
//       {
//         id: "22",
//         name: "Days Of The Week",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2fa8db46bd78480a981b459b666e6303&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/87b25931-7b74-3175-8e96-68fea2711f04_320_4db2d92f-0b58-40f0-8f56-8569b55c29e6.png",
//       },
//       {
//         id: "23",
//         name: "Cupid Crown BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=599050da09bd4fa2862d546a4a12053a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a963296a-6226-3352-8721-57cf3cd9a249_320_fa02c3b4-414b-4542-a7b2-87da298714a7.png",
//       },
//       {
//         id: "24",
//         name: "BEAR BLISS x GRAIN",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=cf7b2e6888e8491882166f9b869b8d44&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/0d04dec7-2cee-363e-9e49-6f726764a66d_320_9ae94d99-3476-4040-88a9-98a8010bc029.png",
//       },
//       {
//         id: "25",
//         name: "M00DY",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7752170cc7914ad49fb23cbaf2bb48f7&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a9f40a8a-f909-31f0-9b60-57bed730baca_320_cbf61959-d849-4e03-b509-add173eb683f.png",
//       },
//       {
//         id: "26",
//         name: "VINTAGE",
//         views: "900M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=78b6463522784c788df69af5b2f49599&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8ed2035c-5a0e-3020-9d6e-a0a1d4f19bba_320_c8c9908b-60c6-44ba-9b79-b8192911fa82.png",
//       },
//       {
//         id: "27",
//         name: "Aesthetic day",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fc3aa25c44314298b596d3b63b2b00f1&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/10210439-4bc7-3b6d-a439-c445a0f99120_320_78b9a355-09ea-43eb-8619-05cf613c298e.png",
//       },
//       {
//         id: "28",
//         name: "Avril",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b428b183f43643e3b1d23f14409ec52c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/33896853-a5a4-3f24-9aaf-dc6a3aa3f1ea_320_1f3c8ca0-2c9d-4987-84a3-a4858b2d1908.png",
//       },
//       {
//         id: "29",
//         name: "70s Aesthetic",
//         views: "800M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d528500d0f914323a0823bfcf4799377&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7c5168d6-b79a-3979-9ae8-b923123a4396_320_f9deda53-0f4b-4918-80fb-b0aef001257d.png",
//       },
//       {
//         id: "30",
//         name: "Bella",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e1e05e070c294b4e8f00f2677aa38d46&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/bcac6e85-c893-35b6-a25b-4976e3610624_320_2fd61ec3-e0b1-4a9b-900c-ff6b6026a7ae.png",
//       },
//       {
//         id: "31",
//         name: "Arch BNW",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e080f723b6014e1c9941a86705e07970&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f45ccc5e-693b-36c3-94f5-488961bb9687_320_b28d9d5c-2392-4401-b58e-073ccbeb2878.png",
//       },
//       {
//         id: "32",
//         name: "snapshot",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f317dac77ad54627996f09adcd144746&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/544d8c75-31b5-39e2-adb2-c1df4d1fdd3e_320_775384f8-624f-45af-95c8-45cb10d73f27.png",
//       },
//       {
//         id: "33",
//         name: "Aloha",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f98615580a9b4a96a71063387e97624b&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/257666fb-3c81-3bf2-9f2c-4b49d37b6b46_320_49200826-fca3-4792-9f14-37a8b07b35dc.png",
//       },
//       {
//         id: "34",
//         name: "Ivy",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=94c4946752884e328a8c8e9f1c2d35dc&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/e2f948ce-734b-371a-870f-0a192e96754e_320_eef2c510-759c-4e18-9e13-5fb3b7f49239.png",
//       },
//       {
//         id: "35",
//         name: "Morana",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e2e129c6899472889818376fe7f1ef9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8e0e728a-323a-3646-b63f-5cc4732d8cb1_320_cf7daa38-9b9e-44f6-b3d3-3a52ea6264ea.png",
//       },
//       {
//         id: "36",
//         name: "Arch sharp",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=679ffbe93a1c491d97d0b5ce4bdf186d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/565a6145-6f91-3a79-86cb-6a12adfd4b81_320_7cfb3fad-f43e-4754-8a51-f402496b9f63.png",
//       },
//       {
//         id: "37",
//         name: "Moment in Time",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=72fb1cc43e8d41da87eb3c497e0cd80d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b359ac69-3714-300d-9c01-8072defdf3ba_320_16406347-c36b-4538-a028-1e52fa8a9ed6.png",
//       },
//       {
//         id: "38",
//         name: "Arch dark",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dcf884ae83de4fbeaa4163ebcadf4c5c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7ebc7b24-8d8a-3cde-813e-e411ca42e046_320_5c7e81c4-803d-4274-9766-f8df06d01f47.png",
//       },
//       {
//         id: "39",
//         name: "Galatea",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c80f57653cf44dcebe310014656e937c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/22aa90c3-0abb-39b6-bf38-f5c67d514414_320_5471aaba-3617-4798-b701-8783eea4e8db.png",
//       },
//       {
//         id: "40",
//         name: "Travis Scott",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8b3407496ee44670b7cd09029b93fa71&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/63c43ffb-6560-3b4d-9ea5-f4f38d96018e_320_bd3a6590-deab-48e7-81e9-a74c4eaf498f.png",
//       },
//       {
//         id: "41",
//         name: "vivid",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=122482f6280c4d9fbdf1cd05ef9cbd14&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/12bbcecf-b6ba-33eb-b8ba-4a0958a67ca0_320_47ae8e8c-2306-481b-8499-551cd4e4fca8.png",
//       },
//       {
//         id: "42",
//         name: "Halcyon",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5091ee5e271d433bba4e8b507320d3b5&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b8858a91-4a8e-3606-b47c-988ff637ab8b_320_583815e4-a6d9-441c-b2fa-6720b79c0681.png",
//       },
//       {
//         id: "43",
//         name: "Bear Bliss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=4ae2015aa2124abc9bd0de0487a2645f&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f3cf7ebc-7b4b-39ad-b590-9edf22deb77f_320_9403ea44-1029-436d-a1f4-66d64140048b.png",
//       },
//       {
//         id: "44",
//         name: "espresso",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aeea456d4c214543ad114bfbbb939965&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/5c07900f-0057-30f9-a12d-1ac889d69b93_320_60a29392-e6d1-41eb-a143-3eb4007685d3.png",
//       },
//       {
//         id: "45",
//         name: "TIME",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=35af50eb034e4b0291cc20247ccf40fa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/be0be1a7-cab1-344f-8d72-19307b343a39_320_b44d3e39-7e97-4e02-9bb6-b373a9e39336.png",
//       },
//       {
//         id: "46",
//         name: "Aphrodite Sharp",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7adcd126048c4fe5ac2519b2d6874032&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9a740fb3-0390-3513-8264-1ee6b39fa361_320_69ec0d3c-713b-4965-bdbf-851bddbc8c55.png",
//       },
//       {
//         id: "47",
//         name: "Polaroid-3",
//         views: "100M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f96ec8b95061478ea7545fdfe45e7b83&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7630ccd9-b788-37b1-a33f-47ee8f980e8e_320_53a1d4ed-3a54-4b24-9c69-9a3d565f2242.png",
//       },
//       {
//         id: "48",
//         name: "Aesthetic crown V2",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=766f9afd452849f9ad8d8a61aaba76aa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/117241d1-8482-3226-87b6-8d97d05fb640_320_59aa4b9c-164e-4acc-910a-52acd51694a3.png",
//       },
//       {
//         id: "49",
//         name: "Butterfly Kiss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0802837f1b604525adeaf86433838d54&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/16e7deae-f8d0-3117-bd70-a9860e3b4abe_320_6e6e1f24-bf6b-470c-be8e-7e601021d275.png",
//       },
//       {
//         id: "50",
//         name: "FILM CAM x MOCHA",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=abbcf62da0f543bbaefdca897bb34302&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4029e868-6ac2-38d6-88e4-c505ced9fecf_320_86c81e0d-facd-4708-8fcd-20276a956035.png",
//       },
//     ]);
//   }, [setTheme]);

//   const tabVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const sidebarVariants = {
//     hidden: { x: -300 },
//     visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   const navItems = [
//     { id: "about", icon: User, label: "About" },
//     { id: "experience", icon: Briefcase, label: "Experience" },
//     { id: "education", icon: GraduationCap, label: "Education" },
//     { id: "projects", icon: Code, label: "Projects" },
//     { id: "skills", icon: ChevronRight, label: "Skills" },
//     { id: "achievements", icon: Award, label: "Achievements" },
//     { id: "blog", icon: BookOpen, label: "Blog Posts" },
//     { id: "snapchat", icon: FaSnapchat, label: "Snapchat Filters" },
//   ];

//   const socialLinks = [
//     {
//       icon: FaGithub,
//       href: "https://github.com/sakethyalamanchili",
//       label: "GitHub",
//     },
//     {
//       icon: FaLinkedin,
//       href: "https://www.linkedin.com/in/sakethyalamanchili/",
//       label: "LinkedIn",
//     },
//     {
//       icon: FaInstagram,
//       href: "https://www.instagram.com/sakethyalamanchili",
//       label: "Instagram",
//     },
//     {
//       icon: FaSnapchat,
//       href: "https://www.snapchat.com/add/saketh05",
//       label: "Snapchat",
//     },
//     {
//       icon: FaMedium,
//       href: "https://medium.com/@sakethyalamanchili",
//       label: "Medium",
//     },
//     {
//       icon: FaKaggle,
//       href: "https://www.kaggle.com/sakethyalamanchili",
//       label: "Kaggle",
//     },
//     { icon: Mail, href: "mailto:syalamanchil2025@fau.edu", label: "Email" },
//   ];

//   if (!isClient) {
//     return null;
//   }

//   const Sidebar = ({ isMobile = false }) => (
//     <ScrollArea className="h-full">
//       <div className="flex flex-col h-full px-6 py-8">
//         <div className="flex flex-col items-center mb-12">
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <Avatar className={`w-20 h-20 mb-4 ring-1 ring-offset-2 transition-all duration-300 hover:ring-2 ${
//               theme === "dark" ? "ring-blue-500/30" : "ring-blue-500/20"
//             }`}>
//               <AvatarImage
//                 src="https://github.com/sakethyalamanchili.png"
//                 alt="Saketh Yalamanchili"
//               />
//               <AvatarFallback>SY</AvatarFallback>
//             </Avatar>
//           </motion.div>
//           <motion.h1
//             className={`text-base font-light mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Saketh Yalamanchili
//           </motion.h1>
//           <motion.p
//             className={`text-xs font-light text-center px-2 ${
//               theme === "dark" ? "text-gray-500" : "text-gray-600"
//             }`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Data Scientist • Software Developer • AR Creator
//           </motion.p>
//         </div>
//         <nav className="flex-grow mb-8">
//           <ul className="space-y-1">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.05 * index }}
//               >
//                 <Button
//                   variant="ghost"
//                   className={`w-full justify-start font-light text-sm transition-all duration-300 ${
//                     activeTab === item.id
//                       ? theme === "dark"
//                         ? "bg-white/5 text-white border-l-2 border-blue-500"
//                         : "bg-gray-900/5 text-gray-900 border-l-2 border-blue-500"
//                       : theme === "dark"
//                       ? "text-gray-400 hover:text-white hover:bg-white/5"
//                       : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/5"
//                   }`}
//                   onClick={() => {
//                     setActiveTab(item.id);
//                     if (isMobile) {
//                       setIsMobileMenuOpen(false);
//                     }
//                   }}
//                 >
//                   <item.icon className="mr-3 h-4 w-4" />
//                   {item.label}
//                 </Button>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>
//         <div className={`pt-6 border-t ${
//           theme === "dark" ? "border-white/5" : "border-gray-900/5"
//         }`}>
//           <div className="grid grid-cols-4 gap-2">
//             {socialLinks.map((link, index) => (
//               <TooltipProvider key={index}>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <motion.a
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
//                         theme === "dark"
//                           ? "hover:bg-white/5 text-gray-400 hover:text-white"
//                           : "hover:bg-gray-900/5 text-gray-600 hover:text-gray-900"
//                       }`}
//                       whileHover={{ scale: 1.1, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <link.icon className="h-4 w-4" />
//                     </motion.a>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p className="text-xs">{link.label}</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             ))}
//           </div>
//         </div>
//       </div>
//     </ScrollArea>
//   );

//   return (
//     <div
//       className={`min-h-screen relative ${
//         theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="flex flex-col md:flex-row relative z-10">
//         {/* Mobile header */}
//         <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon">
//                 <Menu className="h-4 w-4" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="left"
//               className={`w-64 p-0 ${
//                 theme === "dark"
//                   ? "bg-[#161B22] border-r border-[#30363D]"
//                   : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
//               }`}
//             >
//               <Sidebar isMobile={true} />
//             </SheetContent>
//           </Sheet>
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <Switch
//               checked={theme === "dark"}
//               onCheckedChange={() =>
//                 setTheme(theme === "dark" ? "light" : "dark")
//               }
//             />
//           </motion.div>
//         </div>

//         {/* Desktop sidebar */}
//         <motion.div
//           className={`hidden md:block w-64 h-screen fixed left-0 top-0 ${
//             theme === "dark"
//               ? "bg-slate-900/50 border-r border-white/5 backdrop-blur-xl"
//               : "bg-white/50 border-r border-gray-900/5 backdrop-blur-xl"
//           }`}
//           initial="hidden"
//           animate="visible"
//           variants={sidebarVariants}
//         >
//           <Sidebar />
//         </motion.div>

//         {/* Main content */}
//         <motion.div
//           className="flex-1 p-4 md:p-8 md:ml-64"
//           initial="hidden"
//           animate="visible"
//           variants={contentVariants}
//         >
//           {/* Desktop theme toggle */}
//           <div className="hidden md:flex justify-end mb-4">
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <Switch
//                 checked={theme === "dark"}
//                 onCheckedChange={() =>
//                   setTheme(theme === "dark" ? "light" : "dark")
//                 }
//                 className="mr-2"
//               />
//             </motion.div>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               {theme === "dark" ? (
//                 <Moon className="h-5 w-5" />
//               ) : (
//                 <Sun className="h-5 w-5" />
//               )}
//             </motion.span>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={tabVariants}
//             >
//               {activeTab === "hero" && showHero && (
//                 <HeroSection
//                   theme={theme === "dark" ? "dark" : "light"}
//                   onExploreClick={() => {
//                     setActiveTab("about");
//                     setShowHero(false);
//                   }}
//                 />
//               )}
//               {activeTab === "about" && (
//                 <About theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "experience" && (
//                 <Experience theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "education" && (
//                 <Education theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "projects" && (
//                 <Projects theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "skills" && (
//                 <Skills theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "achievements" && (
//                 <Achievements theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "blog" && (
//                 <Card
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#161B22] border-[#30363D]"
//                       : "bg-white border-[#E5E7EB]"
//                   }`}
//                 >
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-bold">
//                       Blog Posts
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <BlogPosts
//                       posts={mediumPosts}
//                       theme={theme === "dark" ? "dark" : "light"}
//                     />
//                   </CardContent>
//                 </Card>
//               )}
//               {activeTab === "snapchat" && (
//                 <Card
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#161B22] border-[#30363D]"
//                       : "bg-white border-[#E5E7EB]"
//                   }`}
//                 >
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-bold">
//                       Top 50 Snapchat Filters
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <SnapchatFilters
//                       filters={snapchatFilters}
//                       theme={theme === "dark" ? "dark" : "light"}
//                     />
//                   </CardContent>
//                 </Card>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </div>
//       <ScrollToTop theme={theme === "dark" ? "dark" : "light"} />
//     </div>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";
// import dynamic from "next/dynamic";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   BookOpen,
//   Code,
//   GraduationCap,
//   Mail,
//   Briefcase,
//   User,
//   Award,
//   ChevronRight,
//   Moon,
//   Sun,
//   Menu,
//   ChevronDown,
//   Sparkles,
//   Camera,
// } from "lucide-react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaKaggle,
//   FaSnapchat,
//   FaMedium,
//   FaInstagram,
// } from "react-icons/fa";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// // Dynamically import client-side components
// const About = dynamic(() => import("./About"), { ssr: false });
// const Education = dynamic(() => import("./Education"), { ssr: false });
// const Experience = dynamic(() => import("./Experience"), { ssr: false });
// const Projects = dynamic(() => import("./Projects"), { ssr: false });
// const Skills = dynamic(() => import("./Skills"), { ssr: false });
// const BlogPosts = dynamic(() => import("./BlogPosts"), { ssr: false });
// const SnapchatFilters = dynamic(() => import("./SnapchatFilters"), {
//   ssr: false,
// });
// const Achievements = dynamic(() => import("./Achievements"), { ssr: false });
// const Photography = dynamic(() => import("./Photography"), { ssr: false });

// // Built-in Scroll to Top Component
// const ScrollToTop: React.FC<{ theme: "dark" | "light" }> = ({ theme }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={scrollToTop}
//           className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 ${
//             theme === "dark"
//               ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-blue-500/50"
//               : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-blue-400/50"
//           }`}
//         >
//           <ChevronDown className="w-6 h-6 rotate-180" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };


// interface BlogPost {
//   guid: string;
//   title: string;
//   pubDate: string;
//   link: string;
// }

// interface SnapchatFilter {
//   id: string;
//   name: string;
//   views: string;
//   link: string;
//   codeImage: string;
// }

// interface HeroSectionProps {
//   theme: "dark" | "light";
//   onExploreClick: () => void;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ theme, onExploreClick }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Counter animation hook
//   const useCounter = (end: number, duration: number = 2000) => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       let startTime: number;
//       let animationFrame: number;
//       const animate = (currentTime: number) => {
//         if (!startTime) startTime = currentTime;
//         const progress = Math.min((currentTime - startTime) / duration, 1);
//         setCount(Math.floor(progress * end));
//         if (progress < 1) animationFrame = requestAnimationFrame(animate);
//       };
//       animationFrame = requestAnimationFrame(animate);
//       return () => cancelAnimationFrame(animationFrame);
//     }, [end, duration]);
//     return count;
//   };

//   const viewsCount = useCounter(150);
//   const followersCount = useCounter(750);
//   const lensesCount = useCounter(300);
//   const gpaCount = useCounter(40) / 10;

//   const stats = [
//     { value: `${viewsCount}B+`, label: "Total Views", delay: 0, icon: "📊" },
//     { value: `${followersCount}K+`, label: "Followers", delay: 0.1, icon: "👥" },
//     { value: `${lensesCount}+`, label: "AR Lenses", delay: 0.2, icon: "🎨" },
//     { value: gpaCount.toFixed(1), label: "GPA", delay: 0.2, icon: "🎓" },
//   ];

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
//       {/* Enhanced Background with Grid Pattern */}
//       <div className="absolute inset-0">
//         <div
//           className={`absolute inset-0 transition-all duration-1000 ${
//             theme === "dark"
//               ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
//               : "bg-gradient-to-br from-white via-slate-50 to-white"
//           }`}
//         />
//         {/* Animated Grid */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px), linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}
//         />
//         {/* Gradient Orbs */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: mousePosition.x * 2,
//             y: mousePosition.y * 2,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: -mousePosition.x * 2,
//             y: -mousePosition.y * 2,
//             scale: [1, 1.3, 1],
//           }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-15"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: mousePosition.x * -1.5,
//             y: mousePosition.y * 1.5,
//             scale: [1, 1.15, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Floating Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="flex justify-center mb-8"
//           >
//             <motion.div
//               className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md ${
//                 theme === "dark"
//                   ? "bg-white/5 border-white/10"
//                   : "bg-gray-900/5 border-gray-900/10"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -5, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <Sparkles className="w-4 h-4 text-blue-400" />
//               <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 Available for Opportunities
//               </span>
//             </motion.div>
//           </motion.div>

//           {/* Subtitle */}
//           <motion.p
//             className={`text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 font-light ${
//               theme === "dark" ? "text-blue-400/70" : "text-blue-600/70"
//             }`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Data Scientist • Software Developer • AR Creator
//           </motion.p>

//           {/* Name with Enhanced Animation */}
//           <div className="mb-10 md:mb-12 px-2 sm:px-4 max-w-[90vw] mx-auto">
//             <h1
//               className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight text-balance ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}
//             >
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="block"
//               >
//                 SAKETH
//               </motion.span>
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="block relative"
//               >
//                 <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
//                   YALAMANCHILI
//                 </span>
//                 {/* Animated underline */}
//                 <motion.div
//                   className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </motion.span>
//             </h1>
//           </div>

//           {/* Enhanced Stats with Icons */}
//           <motion.div
//             className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 group overflow-hidden ${
//                   theme === "dark"
//                     ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
//                     : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10 hover:border-gray-900/20"
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.2 + stat.delay, duration: 0.6 }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                   boxShadow:
//                     theme === "dark"
//                       ? "0 20px 40px rgba(59, 130, 246, 0.3)"
//                       : "0 20px 40px rgba(0, 0, 0, 0.1)",
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Gradient background on hover */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 />
                
//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <motion.div 
//                     className="text-2xl mb-2"
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
//                   >
//                     {stat.icon}
//                   </motion.div>
                  
//                   <motion.div
//                     className={`text-3xl md:text-4xl lg:text-5xl font-extralight mb-2 ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {stat.value}
//                   </motion.div>
//                   <div
//                     className={`text-xs md:text-sm font-light tracking-wider uppercase ${
//                       theme === "dark" ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {stat.label}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Enhanced CTA Button */}
//           <motion.button
//             onClick={onExploreClick}
//             className={`relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-500 border text-sm md:text-base font-light tracking-wide min-h-[44px] min-w-[44px] group ${
//               theme === "dark"
//                 ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white backdrop-blur-xl"
//                 : "bg-gray-900/5 hover:bg-gray-900/10 border-gray-900/10 hover:border-gray-900/20 text-gray-900 backdrop-blur-xl"
//             }`}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.8, duration: 0.5 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 theme === "dark"
//                   ? "0 20px 40px rgba(59, 130, 246, 0.4)"
//                   : "0 20px 40px rgba(0, 0, 0, 0.15)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Animated gradient background */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
//               animate={{
//                 x: ["-100%", "100%"],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
            
//             <span className="relative z-10 flex items-center gap-2">
//               Explore My Work
//               <motion.span
//                 animate={{ x: [0, 4, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 →
//               </motion.span>
//             </span>
//           </motion.button>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, y: [0, 8, 0] }}
//           transition={{ delay: 2, duration: 2, repeat: Infinity }}
//         >
//           <ChevronDown
//             className={`w-5 h-5 ${
//               theme === "dark" ? "text-gray-500" : "text-gray-400"
//             }`}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default function Portfolio() {
//   const [mediumPosts, setMediumPosts] = useState<BlogPost[]>([]);
//   const [snapchatFilters, setSnapchatFilters] = useState<SnapchatFilter[]>([]);
//   const { theme, setTheme } = useTheme();
//   const [activeTab, setActiveTab] = useState("hero");
//   const [isClient, setIsClient] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showHero, setShowHero] = useState(true);

//   useEffect(() => {
//     setIsClient(true);
//     // Set the default theme to dark
//     setTheme("dark");

//     fetch(
//       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethyalamanchili"
//     )
//       .then((response) => response.json())
//       .then((data) => setMediumPosts(data.items));

//     setSnapchatFilters([
//       {
//         id: "1",
//         name: "low exposure sharp",
//         views: "15B+ counting",
//         link: "https://www.snapchat.com/lens/f6476c9100404360912c2f50c76be9f6?sender_web_id=4dea06cb-3692-4885-be38-f367bcd5959a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f6476c9100404360912c2f50c76be9f6&version=1&type=svg",
//       },
//       {
//         id: "2",
//         name: "MACBOOK BW x GRAIN",
//         views: "17B+ counting",
//         link: "https://www.snapchat.com/lens/3e3089b84f244bd7a3a692103a4d490d?type=SNAPCODE&metadata=01",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=3e3089b84f244bd7a3a692103a4d490d&version=1&type=svg",
//       },
//       {
//         id: "3",
//         name: "FILM CAM",
//         views: "13B+ counting",
//         link: "https://www.snapchat.com/lens/8cb9093d0af94467beaf241fbd5f8deb?sender_web_id=4454df49-3495-45f4-bc1c-7a8ebd809a3c&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=8cb9093d0af94467beaf241fbd5f8deb&version=1&type=svg",
//       },
//       {
//         id: "4",
//         name: "MACBOOK BNW",
//         views: "14B+ counting",
//         link: "https://www.snapchat.com/lens/738ca1236ade447f95287ee74e2f16ed?sender_web_id=41287078-3783-4d1c-8420-a4187b32c554&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=738ca1236ade447f95287ee74e2f16ed&version=1&type=svg",
//       },
//       {
//         id: "5",
//         name: "Vintage BNW",
//         views: "7B+ counting",
//         link: "https://www.snapchat.com/lens/f35c0c4968954be7bf3c0bf784876f45?sender_web_id=9827ed68-fa8e-443f-b6e1-394da543e03d&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f35c0c4968954be7bf3c0bf784876f45&version=1&type=svg",
//       },
//       {
//         id: "6",
//         name: "pretty",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/7a4097cae92745dd89e28619ab23b688?sender_web_id=2b0673a5-4717-49ca-9dda-904a73582353&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7a4097cae92745dd89e28619ab23b688&version=1&type=svg",
//       },
//       {
//         id: "7",
//         name: "DARK",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/e45121661d0e40dbac00adc71476f757?sender_web_id=9b91ee9c-92df-4bcf-94e7-2b374ea4a189&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e45121661d0e40dbac00adc71476f757&version=1&type=svg",
//       },
//       {
//         id: "8",
//         name: "Cupid Crown BW x G",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/052ebd1e4c3442688196bd4c4a5cb827?sender_web_id=2ba3b995-61b2-4936-ac84-f9d1cd4254b2&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=052ebd1e4c3442688196bd4c4a5cb827&version=1&type=svg",
//       },
//       {
//         id: "9",
//         name: "achromatic",
//         views: "4B+ counting",
//         link: "https://www.snapchat.com/lens/ab7c06e47fa24214b5a7cab13ed4310b?sender_web_id=3729ff05-f656-48eb-9058-2c4d3f7d6028&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=ab7c06e47fa24214b5a7cab13ed4310b&version=1&type=svg",
//       },
//       {
//         id: "10",
//         name: "low exposure",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/7c6bd6a9ab784a769deff5e64b7ecd00?sender_web_id=6e8a0a56-3aab-4a3c-979d-921c6c5c8f2f&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7c6bd6a9ab784a769deff5e64b7ecd00&version=1&type=svg",
//       },
//       {
//         id: "11",
//         name: "Cupid Crown",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/51609f9a55fe43ddbf4bafff47ff9d1a?sender_web_id=90a32dc7-07ed-4825-80b6-6cf9beb3a10a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=51609f9a55fe43ddbf4bafff47ff9d1a&version=1&type=svg",
//       },
//       {
//         id: "12",
//         name: "Deep moody",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/865823d263b249119832aa7adf948b42?sender_web_id=536efae2-a973-455b-ad1d-18f04112f7e8&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=865823d263b249119832aa7adf948b42&version=1&type=svg",
//       },
//       {
//         id: "13",
//         name: "Hearts Mood",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e5e21255b0ae4e60805196a9840ea8cd?sender_web_id=cc4d20de-e3c7-4481-91a1-e6796805f835&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e5e21255b0ae4e60805196a9840ea8cd&version=1&type=svg",
//       },
//       {
//         id: "14",
//         name: "BlossomBliss",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/c6c197f7c69d4cb5b4d96dc1256acd5d?sender_web_id=5251e0a9-92ea-490f-9df4-95dcdf2501ab&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=c6c197f7c69d4cb5b4d96dc1256acd5d&version=1&type=svg",
//       },
//       {
//         id: "15",
//         name: "Grainy BNW-2",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e4a239547c704a38b79b3cff3eaa6cc9?sender_web_id=43baf1ae-607e-401c-b59c-a6bcf4592840&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e4a239547c704a38b79b3cff3eaa6cc9&version=1&type=svg",
//       },
//       {
//         id: "16",
//         name: "BlossomBliss Grain",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/6725ccfebde24b3e8b54b6f4691788af?sender_web_id=06e625ff-aa4f-4690-b610-7d6123d6b16b&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=6725ccfebde24b3e8b54b6f4691788af&version=1&type=svg",
//       },
//       {
//         id: "17",
//         name: "Album BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a7dea132d23b4c5c9dc72788fdd9dc53&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8fa3c60e-8909-36b4-8863-e00e159c2446_320_3d2393da-2554-4a9d-b812-59b1d60bfc03.png",
//       },
//       {
//         id: "18",
//         name: "natural",
//         views: "1B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=255c7597286447cb8773c5668b1cac5a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b755e613-c4b2-3f59-b280-fde6b20eca5e_320_e9d5aeff-9ef3-4d90-98eb-1945ae57cbfc.png",
//       },
//       {
//         id: "19",
//         name: "Grainy BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fd7f029cb0064d88b73189f7b96837a9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7401f897-7aa6-3ccf-a941-4cf9a74a17ce_320_89fb184c-dbdd-4d9e-8cc1-dbe38ce87d1a.png",
//       },
//       {
//         id: "20",
//         name: "MACBOOK EFFECT",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8759a8433a15431ab0bc8e01a7a76942&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4af08aa8-0007-331f-829b-c080bfcd84f7_320_cb4fd0db-ee40-4450-9e28-ca184ab63279.png",
//       },
//       {
//         id: "21",
//         name: "Cross BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=452fc5100a7d442c84465048c35d098d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9fd585a9-3405-3930-8b8c-ad7e089c2631_320_fd77a151-8cb5-4fc5-80d7-4d26804b0b11.png",
//       },
//       {
//         id: "22",
//         name: "Days Of The Week",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2fa8db46bd78480a981b459b666e6303&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/87b25931-7b74-3175-8e96-68fea2711f04_320_4db2d92f-0b58-40f0-8f56-8569b55c29e6.png",
//       },
//       {
//         id: "23",
//         name: "Cupid Crown BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=599050da09bd4fa2862d546a4a12053a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a963296a-6226-3352-8721-57cf3cd9a249_320_fa02c3b4-414b-4542-a7b2-87da298714a7.png",
//       },
//       {
//         id: "24",
//         name: "BEAR BLISS x GRAIN",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=cf7b2e6888e8491882166f9b869b8d44&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/0d04dec7-2cee-363e-9e49-6f726764a66d_320_9ae94d99-3476-4040-88a9-98a8010bc029.png",
//       },
//       {
//         id: "25",
//         name: "M00DY",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7752170cc7914ad49fb23cbaf2bb48f7&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a9f40a8a-f909-31f0-9b60-57bed730baca_320_cbf61959-d849-4e03-b509-add173eb683f.png",
//       },
//       {
//         id: "26",
//         name: "VINTAGE",
//         views: "900M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=78b6463522784c788df69af5b2f49599&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8ed2035c-5a0e-3020-9d6e-a0a1d4f19bba_320_c8c9908b-60c6-44ba-9b79-b8192911fa82.png",
//       },
//       {
//         id: "27",
//         name: "Aesthetic day",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fc3aa25c44314298b596d3b63b2b00f1&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/10210439-4bc7-3b6d-a439-c445a0f99120_320_78b9a355-09ea-43eb-8619-05cf613c298e.png",
//       },
//       {
//         id: "28",
//         name: "Avril",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b428b183f43643e3b1d23f14409ec52c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/33896853-a5a4-3f24-9aaf-dc6a3aa3f1ea_320_1f3c8ca0-2c9d-4987-84a3-a4858b2d1908.png",
//       },
//       {
//         id: "29",
//         name: "70s Aesthetic",
//         views: "800M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d528500d0f914323a0823bfcf4799377&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7c5168d6-b79a-3979-9ae8-b923123a4396_320_f9deda53-0f4b-4918-80fb-b0aef001257d.png",
//       },
//       {
//         id: "30",
//         name: "Bella",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e1e05e070c294b4e8f00f2677aa38d46&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/bcac6e85-c893-35b6-a25b-4976e3610624_320_2fd61ec3-e0b1-4a9b-900c-ff6b6026a7ae.png",
//       },
//       {
//         id: "31",
//         name: "Arch BNW",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e080f723b6014e1c9941a86705e07970&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f45ccc5e-693b-36c3-94f5-488961bb9687_320_b28d9d5c-2392-4401-b58e-073ccbeb2878.png",
//       },
//       {
//         id: "32",
//         name: "snapshot",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f317dac77ad54627996f09adcd144746&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/544d8c75-31b5-39e2-adb2-c1df4d1fdd3e_320_775384f8-624f-45af-95c8-45cb10d73f27.png",
//       },
//       {
//         id: "33",
//         name: "Aloha",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f98615580a9b4a96a71063387e97624b&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/257666fb-3c81-3bf2-9f2c-4b49d37b6b46_320_49200826-fca3-4792-9f14-37a8b07b35dc.png",
//       },
//       {
//         id: "34",
//         name: "Ivy",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=94c4946752884e328a8c8e9f1c2d35dc&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/e2f948ce-734b-371a-870f-0a192e96754e_320_eef2c510-759c-4e18-9e13-5fb3b7f49239.png",
//       },
//       {
//         id: "35",
//         name: "Morana",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e2e129c6899472889818376fe7f1ef9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8e0e728a-323a-3646-b63f-5cc4732d8cb1_320_cf7daa38-9b9e-44f6-b3d3-3a52ea6264ea.png",
//       },
//       {
//         id: "36",
//         name: "Arch sharp",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=679ffbe93a1c491d97d0b5ce4bdf186d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/565a6145-6f91-3a79-86cb-6a12adfd4b81_320_7cfb3fad-f43e-4754-8a51-f402496b9f63.png",
//       },
//       {
//         id: "37",
//         name: "Moment in Time",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=72fb1cc43e8d41da87eb3c497e0cd80d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b359ac69-3714-300d-9c01-8072defdf3ba_320_16406347-c36b-4538-a028-1e52fa8a9ed6.png",
//       },
//       {
//         id: "38",
//         name: "Arch dark",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dcf884ae83de4fbeaa4163ebcadf4c5c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7ebc7b24-8d8a-3cde-813e-e411ca42e046_320_5c7e81c4-803d-4274-9766-f8df06d01f47.png",
//       },
//       {
//         id: "39",
//         name: "Galatea",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c80f57653cf44dcebe310014656e937c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/22aa90c3-0abb-39b6-bf38-f5c67d514414_320_5471aaba-3617-4798-b701-8783eea4e8db.png",
//       },
//       {
//         id: "40",
//         name: "Travis Scott",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8b3407496ee44670b7cd09029b93fa71&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/63c43ffb-6560-3b4d-9ea5-f4f38d96018e_320_bd3a6590-deab-48e7-81e9-a74c4eaf498f.png",
//       },
//       {
//         id: "41",
//         name: "vivid",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=122482f6280c4d9fbdf1cd05ef9cbd14&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/12bbcecf-b6ba-33eb-b8ba-4a0958a67ca0_320_47ae8e8c-2306-481b-8499-551cd4e4fca8.png",
//       },
//       {
//         id: "42",
//         name: "Halcyon",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5091ee5e271d433bba4e8b507320d3b5&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b8858a91-4a8e-3606-b47c-988ff637ab8b_320_583815e4-a6d9-441c-b2fa-6720b79c0681.png",
//       },
//       {
//         id: "43",
//         name: "Bear Bliss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=4ae2015aa2124abc9bd0de0487a2645f&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f3cf7ebc-7b4b-39ad-b590-9edf22deb77f_320_9403ea44-1029-436d-a1f4-66d64140048b.png",
//       },
//       {
//         id: "44",
//         name: "espresso",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aeea456d4c214543ad114bfbbb939965&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/5c07900f-0057-30f9-a12d-1ac889d69b93_320_60a29392-e6d1-41eb-a143-3eb4007685d3.png",
//       },
//       {
//         id: "45",
//         name: "TIME",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=35af50eb034e4b0291cc20247ccf40fa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/be0be1a7-cab1-344f-8d72-19307b343a39_320_b44d3e39-7e97-4e02-9bb6-b373a9e39336.png",
//       },
//       {
//         id: "46",
//         name: "Aphrodite Sharp",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7adcd126048c4fe5ac2519b2d6874032&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9a740fb3-0390-3513-8264-1ee6b39fa361_320_69ec0d3c-713b-4965-bdbf-851bddbc8c55.png",
//       },
//       {
//         id: "47",
//         name: "Polaroid-3",
//         views: "100M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f96ec8b95061478ea7545fdfe45e7b83&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7630ccd9-b788-37b1-a33f-47ee8f980e8e_320_53a1d4ed-3a54-4b24-9c69-9a3d565f2242.png",
//       },
//       {
//         id: "48",
//         name: "Aesthetic crown V2",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=766f9afd452849f9ad8d8a61aaba76aa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/117241d1-8482-3226-87b6-8d97d05fb640_320_59aa4b9c-164e-4acc-910a-52acd51694a3.png",
//       },
//       {
//         id: "49",
//         name: "Butterfly Kiss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0802837f1b604525adeaf86433838d54&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/16e7deae-f8d0-3117-bd70-a9860e3b4abe_320_6e6e1f24-bf6b-470c-be8e-7e601021d275.png",
//       },
//       {
//         id: "50",
//         name: "FILM CAM x MOCHA",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=abbcf62da0f543bbaefdca897bb34302&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4029e868-6ac2-38d6-88e4-c505ced9fecf_320_86c81e0d-facd-4708-8fcd-20276a956035.png",
//       },
//     ]);
//   }, [setTheme]);

//   const tabVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const sidebarVariants = {
//     hidden: { x: -300 },
//     visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   const navItems = [
//     { id: "about", icon: User, label: "About" },
//     { id: "experience", icon: Briefcase, label: "Experience" },
//     { id: "education", icon: GraduationCap, label: "Education" },
//     { id: "projects", icon: Code, label: "Projects" },
//     { id: "skills", icon: ChevronRight, label: "Skills" },
//     { id: "achievements", icon: Award, label: "Achievements" },
//     { id: "blog", icon: BookOpen, label: "Blog Posts" },
//     { id: "snapchat", icon: FaSnapchat, label: "Snapchat Filters" },
//     { id: "photography", icon: Camera, label: "Photography" },
//   ];

//   const socialLinks = [
//     {
//       icon: FaGithub,
//       href: "https://github.com/sakethyalamanchili",
//       label: "GitHub",
//     },
//     {
//       icon: FaLinkedin,
//       href: "https://www.linkedin.com/in/sakethyalamanchili/",
//       label: "LinkedIn",
//     },
//     {
//       icon: FaInstagram,
//       href: "https://www.instagram.com/sakethyalamanchili",
//       label: "Instagram",
//     },
//     {
//       icon: FaSnapchat,
//       href: "https://www.snapchat.com/add/saketh05",
//       label: "Snapchat",
//     },
//     {
//       icon: FaMedium,
//       href: "https://medium.com/@sakethyalamanchili",
//       label: "Medium",
//     },
//     {
//       icon: FaKaggle,
//       href: "https://www.kaggle.com/sakethyalamanchili",
//       label: "Kaggle",
//     },
//     { icon: Mail, href: "mailto:syalamanchil2025@fau.edu", label: "Email" },
//   ];

//   if (!isClient) {
//     return null;
//   }

//   const Sidebar = ({ isMobile = false }) => (
//     <ScrollArea className="h-full">
//       <div className="flex flex-col h-full px-6 py-8">
//         <div className="flex flex-col items-center mb-12">
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <Avatar className={`w-32 h-32 mb-4 ring-2 ring-offset-4 transition-all duration-300 hover:ring-4 ${
//               theme === "dark" ? "ring-blue-500/40 ring-offset-slate-900" : "ring-blue-500/30 ring-offset-white"
//             }`}>
//               <AvatarImage
//                 src="https://github.com/sakethyalamanchili.png"
//                 alt="Saketh Yalamanchili"
//               />
//               <AvatarFallback>SY</AvatarFallback>
//             </Avatar>
//           </motion.div>
//           <motion.h1
//             className={`text-base font-light mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Saketh Yalamanchili
//           </motion.h1>
//           <motion.p
//             className={`text-xs font-light text-center px-2 ${
//               theme === "dark" ? "text-gray-500" : "text-gray-600"
//             }`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Data Scientist • Software Developer • AR Creator
//           </motion.p>
//         </div>
//         <nav className="flex-grow mb-8">
//           <ul className="space-y-1">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.05 * index }}
//               >
//                 <Button
//                   variant="ghost"
//                   className={`w-full justify-start font-light text-sm transition-all duration-300 ${
//                     activeTab === item.id
//                       ? theme === "dark"
//                         ? "bg-white/5 text-white border-l-2 border-blue-500"
//                         : "bg-gray-900/5 text-gray-900 border-l-2 border-blue-500"
//                       : theme === "dark"
//                       ? "text-gray-400 hover:text-white hover:bg-white/5"
//                       : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/5"
//                   }`}
//                   onClick={() => {
//                     setActiveTab(item.id);
//                     if (isMobile) {
//                       setIsMobileMenuOpen(false);
//                     }
//                   }}
//                 >
//                   <item.icon className="mr-3 h-4 w-4" />
//                   {item.label}
//                 </Button>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>
//         <div className={`pt-6 border-t ${
//           theme === "dark" ? "border-white/5" : "border-gray-900/5"
//         }`}>
//           <div className="grid grid-cols-4 gap-2">
//             {socialLinks.map((link, index) => (
//               <TooltipProvider key={index}>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <motion.a
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
//                         theme === "dark"
//                           ? "hover:bg-white/5 text-gray-400 hover:text-white"
//                           : "hover:bg-gray-900/5 text-gray-600 hover:text-gray-900"
//                       }`}
//                       whileHover={{ scale: 1.1, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <link.icon className="h-4 w-4" />
//                     </motion.a>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p className="text-xs">{link.label}</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             ))}
//           </div>
//         </div>
//       </div>
//     </ScrollArea>
//   );

//   return (
//     <div
//       className={`min-h-screen relative ${
//         theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="flex flex-col md:flex-row relative z-10">
//         {/* Mobile header */}
//         <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon">
//                 <Menu className="h-4 w-4" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="left"
//               className={`w-64 p-0 ${
//                 theme === "dark"
//                   ? "bg-[#161B22] border-r border-[#30363D]"
//                   : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
//               }`}
//             >
//               <Sidebar isMobile={true} />
//             </SheetContent>
//           </Sheet>
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <Switch
//               checked={theme === "dark"}
//               onCheckedChange={() =>
//                 setTheme(theme === "dark" ? "light" : "dark")
//               }
//             />
//           </motion.div>
//         </div>

//         {/* Desktop sidebar */}
//         <motion.div
//           className={`hidden md:block w-64 h-screen fixed left-0 top-0 ${
//             theme === "dark"
//               ? "bg-slate-900/50 border-r border-white/5 backdrop-blur-xl"
//               : "bg-white/50 border-r border-gray-900/5 backdrop-blur-xl"
//           }`}
//           initial="hidden"
//           animate="visible"
//           variants={sidebarVariants}
//         >
//           <Sidebar />
//         </motion.div>

//         {/* Main content */}
//         <motion.div
//           className="flex-1 p-4 md:p-8 md:ml-64"
//           initial="hidden"
//           animate="visible"
//           variants={contentVariants}
//         >
//           {/* Desktop theme toggle */}
//           <div className="hidden md:flex justify-end mb-4">
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <Switch
//                 checked={theme === "dark"}
//                 onCheckedChange={() =>
//                   setTheme(theme === "dark" ? "light" : "dark")
//                 }
//                 className="mr-2"
//               />
//             </motion.div>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               {theme === "dark" ? (
//                 <Moon className="h-5 w-5" />
//               ) : (
//                 <Sun className="h-5 w-5" />
//               )}
//             </motion.span>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={tabVariants}
//             >
//               {activeTab === "hero" && showHero && (
//                 <HeroSection
//                   theme={theme === "dark" ? "dark" : "light"}
//                   onExploreClick={() => {
//                     setActiveTab("about");
//                     setShowHero(false);
//                   }}
//                 />
//               )}
//               {activeTab === "about" && (
//                 <About theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "experience" && (
//                 <Experience theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "education" && (
//                 <Education theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "projects" && (
//                 <Projects theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "skills" && (
//                 <Skills theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "achievements" && (
//                 <Achievements theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "photography" && (
//                 <Photography theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "blog" && (
//                 <Card
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#161B22] border-[#30363D]"
//                       : "bg-white border-[#E5E7EB]"
//                   }`}
//                 >
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-bold">
//                       Blog Posts
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <BlogPosts
//                       posts={mediumPosts}
//                       theme={theme === "dark" ? "dark" : "light"}
//                     />
//                   </CardContent>
//                 </Card>
//               )}
//               {activeTab === "snapchat" && (
//                 <Card
//                   className={`${
//                     theme === "dark"
//                       ? "bg-[#161B22] border-[#30363D]"
//                       : "bg-white border-[#E5E7EB]"
//                   }`}
//                 >
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-bold">
//                       Top 50 Snapchat Filters
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <SnapchatFilters
//                       filters={snapchatFilters}
//                       theme={theme === "dark" ? "dark" : "light"}
//                     />
//                   </CardContent>
//                 </Card>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </div>
//       <ScrollToTop theme={theme === "dark" ? "dark" : "light"} />
//     </div>
//   );
// }





// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";
// import dynamic from "next/dynamic";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   BookOpen,
//   Code,
//   GraduationCap,
//   Mail,
//   Briefcase,
//   User,
//   Award,
//   ChevronRight,
//   Moon,
//   Sun,
//   Menu,
//   ChevronDown,
//   Sparkles,
//   Camera,
// } from "lucide-react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaKaggle,
//   FaSnapchat,
//   FaMedium,
//   FaInstagram,
// } from "react-icons/fa";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// // Dynamically import client-side components
// const About = dynamic(() => import("./About"), { ssr: false });
// const Education = dynamic(() => import("./Education"), { ssr: false });
// const Experience = dynamic(() => import("./Experience"), { ssr: false });
// const Projects = dynamic(() => import("./Projects"), { ssr: false });
// const Skills = dynamic(() => import("./Skills"), { ssr: false });
// const BlogPosts = dynamic(() => import("./BlogPosts"), { ssr: false });
// const SnapchatFilters = dynamic(() => import("./SnapchatFilters"), {
//   ssr: false,
// });
// const Achievements = dynamic(() => import("./Achievements"), { ssr: false });
// const Photography = dynamic(() => import("./Photography"), { ssr: false });

// // Built-in Scroll to Top Component
// const ScrollToTop: React.FC<{ theme: "dark" | "light" }> = ({ theme }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={scrollToTop}
//           className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 ${
//             theme === "dark"
//               ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-blue-500/50"
//               : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-blue-400/50"
//           }`}
//         >
//           <ChevronDown className="w-6 h-6 rotate-180" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };


// interface BlogPost {
//   guid: string;
//   title: string;
//   pubDate: string;
//   link: string;
// }

// interface SnapchatFilter {
//   id: string;
//   name: string;
//   views: string;
//   link: string;
//   codeImage: string;
// }

// interface HeroSectionProps {
//   theme: "dark" | "light";
//   onExploreClick: () => void;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ theme, onExploreClick }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Counter animation hook
//   const useCounter = (end: number, duration: number = 2000) => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       let startTime: number;
//       let animationFrame: number;
//       const animate = (currentTime: number) => {
//         if (!startTime) startTime = currentTime;
//         const progress = Math.min((currentTime - startTime) / duration, 1);
//         setCount(Math.floor(progress * end));
//         if (progress < 1) animationFrame = requestAnimationFrame(animate);
//       };
//       animationFrame = requestAnimationFrame(animate);
//       return () => cancelAnimationFrame(animationFrame);
//     }, [end, duration]);
//     return count;
//   };

//   const viewsCount = useCounter(150);
//   const followersCount = useCounter(750);
//   const lensesCount = useCounter(300);
//   const gpaCount = useCounter(40) / 10;

//   const stats = [
//     { value: `${viewsCount}B+`, label: "Total Views", delay: 0, icon: "📊" },
//     { value: `${followersCount}K+`, label: "Followers", delay: 0.1, icon: "👥" },
//     { value: `${lensesCount}+`, label: "AR Lenses", delay: 0.2, icon: "🎨" },
//     { value: gpaCount.toFixed(1), label: "GPA", delay: 0.2, icon: "🎓" },
//   ];

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
//       {/* Enhanced Background with Grid Pattern */}
//       <div className="absolute inset-0">
//         <div
//           className={`absolute inset-0 transition-all duration-1000 ${
//             theme === "dark"
//               ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
//               : "bg-gradient-to-br from-white via-slate-50 to-white"
//           }`}
//         />
//         {/* Animated Grid */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px), linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}
//         />
//         {/* Gradient Orbs */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: mousePosition.x * 2,
//             y: mousePosition.y * 2,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: -mousePosition.x * 2,
//             y: -mousePosition.y * 2,
//             scale: [1, 1.3, 1],
//           }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-15"
//           style={{
//             background:
//               theme === "dark"
//                 ? "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)"
//                 : "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
//           }}
//           animate={{
//             x: mousePosition.x * -1.5,
//             y: mousePosition.y * 1.5,
//             scale: [1, 1.15, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Floating Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="flex justify-center mb-8"
//           >
//             <motion.div
//               className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md ${
//                 theme === "dark"
//                   ? "bg-white/5 border-white/10"
//                   : "bg-gray-900/5 border-gray-900/10"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -5, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <Sparkles className="w-4 h-4 text-blue-400" />
//               <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 Available for Opportunities
//               </span>
//             </motion.div>
//           </motion.div>

//           {/* Subtitle */}
//           <motion.p
//             className={`text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 font-light ${
//               theme === "dark" ? "text-blue-400/70" : "text-blue-600/70"
//             }`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Data Scientist • Software Developer • AR Creator
//           </motion.p>

//           {/* Name with Enhanced Animation */}
//           <div className="mb-10 md:mb-12 px-2 sm:px-4 max-w-[90vw] mx-auto">
//             <h1
//               className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight text-balance ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}
//             >
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="block"
//               >
//                 SAKETH
//               </motion.span>
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="block relative"
//               >
//                 <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
//                   YALAMANCHILI
//                 </span>
//                 {/* Animated underline */}
//                 <motion.div
//                   className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </motion.span>
//             </h1>
//           </div>

//           {/* Enhanced Stats with Icons */}
//           <motion.div
//             className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 group overflow-hidden ${
//                   theme === "dark"
//                     ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
//                     : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10 hover:border-gray-900/20"
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.2 + stat.delay, duration: 0.6 }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                   boxShadow:
//                     theme === "dark"
//                       ? "0 20px 40px rgba(59, 130, 246, 0.3)"
//                       : "0 20px 40px rgba(0, 0, 0, 0.1)",
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Gradient background on hover */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 />
                
//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <motion.div 
//                     className="text-2xl mb-2"
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
//                   >
//                     {stat.icon}
//                   </motion.div>
                  
//                   <motion.div
//                     className={`text-3xl md:text-4xl lg:text-5xl font-extralight mb-2 ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {stat.value}
//                   </motion.div>
//                   <div
//                     className={`text-xs md:text-sm font-light tracking-wider uppercase ${
//                       theme === "dark" ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {stat.label}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Enhanced CTA Button */}
//           <motion.button
//             onClick={onExploreClick}
//             className={`relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-500 border text-sm md:text-base font-light tracking-wide min-h-[44px] min-w-[44px] group ${
//               theme === "dark"
//                 ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white backdrop-blur-xl"
//                 : "bg-gray-900/5 hover:bg-gray-900/10 border-gray-900/10 hover:border-gray-900/20 text-gray-900 backdrop-blur-xl"
//             }`}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.8, duration: 0.5 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 theme === "dark"
//                   ? "0 20px 40px rgba(59, 130, 246, 0.4)"
//                   : "0 20px 40px rgba(0, 0, 0, 0.15)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Animated gradient background */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
//               animate={{
//                 x: ["-100%", "100%"],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
            
//             <span className="relative z-10 flex items-center gap-2">
//               Explore My Work
//               <motion.span
//                 animate={{ x: [0, 4, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 →
//               </motion.span>
//             </span>
//           </motion.button>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, y: [0, 8, 0] }}
//           transition={{ delay: 2, duration: 2, repeat: Infinity }}
//         >
//           <ChevronDown
//             className={`w-5 h-5 ${
//               theme === "dark" ? "text-gray-500" : "text-gray-400"
//             }`}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default function Portfolio() {
//   const [mediumPosts, setMediumPosts] = useState<BlogPost[]>([]);
//   const [snapchatFilters, setSnapchatFilters] = useState<SnapchatFilter[]>([]);
//   const { theme, setTheme } = useTheme();
//   const [activeTab, setActiveTab] = useState("hero");
//   const [isClient, setIsClient] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showHero, setShowHero] = useState(true);

//   useEffect(() => {
//     setIsClient(true);
//     // Set the default theme to dark
//     setTheme("dark");

//     fetch(
//       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethyalamanchili"
//     )
//       .then((response) => response.json())
//       .then((data) => setMediumPosts(data.items));

//     setSnapchatFilters([
//       {
//         id: "1",
//         name: "low exposure sharp",
//         views: "15B+ counting",
//         link: "https://www.snapchat.com/lens/f6476c9100404360912c2f50c76be9f6?sender_web_id=4dea06cb-3692-4885-be38-f367bcd5959a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f6476c9100404360912c2f50c76be9f6&version=1&type=svg",
//       },
//       {
//         id: "2",
//         name: "MACBOOK BW x GRAIN",
//         views: "17B+ counting",
//         link: "https://www.snapchat.com/lens/3e3089b84f244bd7a3a692103a4d490d?type=SNAPCODE&metadata=01",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=3e3089b84f244bd7a3a692103a4d490d&version=1&type=svg",
//       },
//       {
//         id: "3",
//         name: "FILM CAM",
//         views: "13B+ counting",
//         link: "https://www.snapchat.com/lens/8cb9093d0af94467beaf241fbd5f8deb?sender_web_id=4454df49-3495-45f4-bc1c-7a8ebd809a3c&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=8cb9093d0af94467beaf241fbd5f8deb&version=1&type=svg",
//       },
//       {
//         id: "4",
//         name: "MACBOOK BNW",
//         views: "14B+ counting",
//         link: "https://www.snapchat.com/lens/738ca1236ade447f95287ee74e2f16ed?sender_web_id=41287078-3783-4d1c-8420-a4187b32c554&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=738ca1236ade447f95287ee74e2f16ed&version=1&type=svg",
//       },
//       {
//         id: "5",
//         name: "Vintage BNW",
//         views: "7B+ counting",
//         link: "https://www.snapchat.com/lens/f35c0c4968954be7bf3c0bf784876f45?sender_web_id=9827ed68-fa8e-443f-b6e1-394da543e03d&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=f35c0c4968954be7bf3c0bf784876f45&version=1&type=svg",
//       },
//       {
//         id: "6",
//         name: "pretty",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/7a4097cae92745dd89e28619ab23b688?sender_web_id=2b0673a5-4717-49ca-9dda-904a73582353&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7a4097cae92745dd89e28619ab23b688&version=1&type=svg",
//       },
//       {
//         id: "7",
//         name: "DARK",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/e45121661d0e40dbac00adc71476f757?sender_web_id=9b91ee9c-92df-4bcf-94e7-2b374ea4a189&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e45121661d0e40dbac00adc71476f757&version=1&type=svg",
//       },
//       {
//         id: "8",
//         name: "Cupid Crown BW x G",
//         views: "5B+ counting",
//         link: "https://www.snapchat.com/lens/052ebd1e4c3442688196bd4c4a5cb827?sender_web_id=2ba3b995-61b2-4936-ac84-f9d1cd4254b2&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=052ebd1e4c3442688196bd4c4a5cb827&version=1&type=svg",
//       },
//       {
//         id: "9",
//         name: "achromatic",
//         views: "4B+ counting",
//         link: "https://www.snapchat.com/lens/ab7c06e47fa24214b5a7cab13ed4310b?sender_web_id=3729ff05-f656-48eb-9058-2c4d3f7d6028&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=ab7c06e47fa24214b5a7cab13ed4310b&version=1&type=svg",
//       },
//       {
//         id: "10",
//         name: "low exposure",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/7c6bd6a9ab784a769deff5e64b7ecd00?sender_web_id=6e8a0a56-3aab-4a3c-979d-921c6c5c8f2f&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=7c6bd6a9ab784a769deff5e64b7ecd00&version=1&type=svg",
//       },
//       {
//         id: "11",
//         name: "Cupid Crown",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/51609f9a55fe43ddbf4bafff47ff9d1a?sender_web_id=90a32dc7-07ed-4825-80b6-6cf9beb3a10a&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=51609f9a55fe43ddbf4bafff47ff9d1a&version=1&type=svg",
//       },
//       {
//         id: "12",
//         name: "Deep moody",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/865823d263b249119832aa7adf948b42?sender_web_id=536efae2-a973-455b-ad1d-18f04112f7e8&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=865823d263b249119832aa7adf948b42&version=1&type=svg",
//       },
//       {
//         id: "13",
//         name: "Hearts Mood",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e5e21255b0ae4e60805196a9840ea8cd?sender_web_id=cc4d20de-e3c7-4481-91a1-e6796805f835&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e5e21255b0ae4e60805196a9840ea8cd&version=1&type=svg",
//       },
//       {
//         id: "14",
//         name: "BlossomBliss",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/c6c197f7c69d4cb5b4d96dc1256acd5d?sender_web_id=5251e0a9-92ea-490f-9df4-95dcdf2501ab&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=c6c197f7c69d4cb5b4d96dc1256acd5d&version=1&type=svg",
//       },
//       {
//         id: "15",
//         name: "Grainy BNW-2",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/lens/e4a239547c704a38b79b3cff3eaa6cc9?sender_web_id=43baf1ae-607e-401c-b59c-a6bcf4592840&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=e4a239547c704a38b79b3cff3eaa6cc9&version=1&type=svg",
//       },
//       {
//         id: "16",
//         name: "BlossomBliss Grain",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/lens/6725ccfebde24b3e8b54b6f4691788af?sender_web_id=06e625ff-aa4f-4690-b610-7d6123d6b16b&device_type=desktop&is_copy_url=true",
//         codeImage:
//           "https://app.snapchat.com/web/deeplink/snapcode?data=6725ccfebde24b3e8b54b6f4691788af&version=1&type=svg",
//       },
//       {
//         id: "17",
//         name: "Album BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a7dea132d23b4c5c9dc72788fdd9dc53&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8fa3c60e-8909-36b4-8863-e00e159c2446_320_3d2393da-2554-4a9d-b812-59b1d60bfc03.png",
//       },
//       {
//         id: "18",
//         name: "natural",
//         views: "1B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=255c7597286447cb8773c5668b1cac5a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b755e613-c4b2-3f59-b280-fde6b20eca5e_320_e9d5aeff-9ef3-4d90-98eb-1945ae57cbfc.png",
//       },
//       {
//         id: "19",
//         name: "Grainy BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fd7f029cb0064d88b73189f7b96837a9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7401f897-7aa6-3ccf-a941-4cf9a74a17ce_320_89fb184c-dbdd-4d9e-8cc1-dbe38ce87d1a.png",
//       },
//       {
//         id: "20",
//         name: "MACBOOK EFFECT",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8759a8433a15431ab0bc8e01a7a76942&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4af08aa8-0007-331f-829b-c080bfcd84f7_320_cb4fd0db-ee40-4450-9e28-ca184ab63279.png",
//       },
//       {
//         id: "21",
//         name: "Cross BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=452fc5100a7d442c84465048c35d098d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9fd585a9-3405-3930-8b8c-ad7e089c2631_320_fd77a151-8cb5-4fc5-80d7-4d26804b0b11.png",
//       },
//       {
//         id: "22",
//         name: "Days Of The Week",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2fa8db46bd78480a981b459b666e6303&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/87b25931-7b74-3175-8e96-68fea2711f04_320_4db2d92f-0b58-40f0-8f56-8569b55c29e6.png",
//       },
//       {
//         id: "23",
//         name: "Cupid Crown BNW",
//         views: "2B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=599050da09bd4fa2862d546a4a12053a&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a963296a-6226-3352-8721-57cf3cd9a249_320_fa02c3b4-414b-4542-a7b2-87da298714a7.png",
//       },
//       {
//         id: "24",
//         name: "BEAR BLISS x GRAIN",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=cf7b2e6888e8491882166f9b869b8d44&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/0d04dec7-2cee-363e-9e49-6f726764a66d_320_9ae94d99-3476-4040-88a9-98a8010bc029.png",
//       },
//       {
//         id: "25",
//         name: "M00DY",
//         views: "3B+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7752170cc7914ad49fb23cbaf2bb48f7&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/a9f40a8a-f909-31f0-9b60-57bed730baca_320_cbf61959-d849-4e03-b509-add173eb683f.png",
//       },
//       {
//         id: "26",
//         name: "VINTAGE",
//         views: "900M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=78b6463522784c788df69af5b2f49599&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8ed2035c-5a0e-3020-9d6e-a0a1d4f19bba_320_c8c9908b-60c6-44ba-9b79-b8192911fa82.png",
//       },
//       {
//         id: "27",
//         name: "Aesthetic day",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fc3aa25c44314298b596d3b63b2b00f1&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/10210439-4bc7-3b6d-a439-c445a0f99120_320_78b9a355-09ea-43eb-8619-05cf613c298e.png",
//       },
//       {
//         id: "28",
//         name: "Avril",
//         views: "700M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b428b183f43643e3b1d23f14409ec52c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/33896853-a5a4-3f24-9aaf-dc6a3aa3f1ea_320_1f3c8ca0-2c9d-4987-84a3-a4858b2d1908.png",
//       },
//       {
//         id: "29",
//         name: "70s Aesthetic",
//         views: "800M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d528500d0f914323a0823bfcf4799377&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7c5168d6-b79a-3979-9ae8-b923123a4396_320_f9deda53-0f4b-4918-80fb-b0aef001257d.png",
//       },
//       {
//         id: "30",
//         name: "Bella",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e1e05e070c294b4e8f00f2677aa38d46&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/bcac6e85-c893-35b6-a25b-4976e3610624_320_2fd61ec3-e0b1-4a9b-900c-ff6b6026a7ae.png",
//       },
//       {
//         id: "31",
//         name: "Arch BNW",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e080f723b6014e1c9941a86705e07970&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f45ccc5e-693b-36c3-94f5-488961bb9687_320_b28d9d5c-2392-4401-b58e-073ccbeb2878.png",
//       },
//       {
//         id: "32",
//         name: "snapshot",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f317dac77ad54627996f09adcd144746&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/544d8c75-31b5-39e2-adb2-c1df4d1fdd3e_320_775384f8-624f-45af-95c8-45cb10d73f27.png",
//       },
//       {
//         id: "33",
//         name: "Aloha",
//         views: "600M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f98615580a9b4a96a71063387e97624b&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/257666fb-3c81-3bf2-9f2c-4b49d37b6b46_320_49200826-fca3-4792-9f14-37a8b07b35dc.png",
//       },
//       {
//         id: "34",
//         name: "Ivy",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=94c4946752884e328a8c8e9f1c2d35dc&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/e2f948ce-734b-371a-870f-0a192e96754e_320_eef2c510-759c-4e18-9e13-5fb3b7f49239.png",
//       },
//       {
//         id: "35",
//         name: "Morana",
//         views: "500M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e2e129c6899472889818376fe7f1ef9&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/8e0e728a-323a-3646-b63f-5cc4732d8cb1_320_cf7daa38-9b9e-44f6-b3d3-3a52ea6264ea.png",
//       },
//       {
//         id: "36",
//         name: "Arch sharp",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=679ffbe93a1c491d97d0b5ce4bdf186d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/565a6145-6f91-3a79-86cb-6a12adfd4b81_320_7cfb3fad-f43e-4754-8a51-f402496b9f63.png",
//       },
//       {
//         id: "37",
//         name: "Moment in Time",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=72fb1cc43e8d41da87eb3c497e0cd80d&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b359ac69-3714-300d-9c01-8072defdf3ba_320_16406347-c36b-4538-a028-1e52fa8a9ed6.png",
//       },
//       {
//         id: "38",
//         name: "Arch dark",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dcf884ae83de4fbeaa4163ebcadf4c5c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7ebc7b24-8d8a-3cde-813e-e411ca42e046_320_5c7e81c4-803d-4274-9766-f8df06d01f47.png",
//       },
//       {
//         id: "39",
//         name: "Galatea",
//         views: "400M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c80f57653cf44dcebe310014656e937c&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/22aa90c3-0abb-39b6-bf38-f5c67d514414_320_5471aaba-3617-4798-b701-8783eea4e8db.png",
//       },
//       {
//         id: "40",
//         name: "Travis Scott",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8b3407496ee44670b7cd09029b93fa71&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/63c43ffb-6560-3b4d-9ea5-f4f38d96018e_320_bd3a6590-deab-48e7-81e9-a74c4eaf498f.png",
//       },
//       {
//         id: "41",
//         name: "vivid",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=122482f6280c4d9fbdf1cd05ef9cbd14&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/12bbcecf-b6ba-33eb-b8ba-4a0958a67ca0_320_47ae8e8c-2306-481b-8499-551cd4e4fca8.png",
//       },
//       {
//         id: "42",
//         name: "Halcyon",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5091ee5e271d433bba4e8b507320d3b5&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/b8858a91-4a8e-3606-b47c-988ff637ab8b_320_583815e4-a6d9-441c-b2fa-6720b79c0681.png",
//       },
//       {
//         id: "43",
//         name: "Bear Bliss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=4ae2015aa2124abc9bd0de0487a2645f&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/f3cf7ebc-7b4b-39ad-b590-9edf22deb77f_320_9403ea44-1029-436d-a1f4-66d64140048b.png",
//       },
//       {
//         id: "44",
//         name: "espresso",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aeea456d4c214543ad114bfbbb939965&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/5c07900f-0057-30f9-a12d-1ac889d69b93_320_60a29392-e6d1-41eb-a143-3eb4007685d3.png",
//       },
//       {
//         id: "45",
//         name: "TIME",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=35af50eb034e4b0291cc20247ccf40fa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/be0be1a7-cab1-344f-8d72-19307b343a39_320_b44d3e39-7e97-4e02-9bb6-b373a9e39336.png",
//       },
//       {
//         id: "46",
//         name: "Aphrodite Sharp",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7adcd126048c4fe5ac2519b2d6874032&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/9a740fb3-0390-3513-8264-1ee6b39fa361_320_69ec0d3c-713b-4965-bdbf-851bddbc8c55.png",
//       },
//       {
//         id: "47",
//         name: "Polaroid-3",
//         views: "100M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f96ec8b95061478ea7545fdfe45e7b83&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/7630ccd9-b788-37b1-a33f-47ee8f980e8e_320_53a1d4ed-3a54-4b24-9c69-9a3d565f2242.png",
//       },
//       {
//         id: "48",
//         name: "Aesthetic crown V2",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=766f9afd452849f9ad8d8a61aaba76aa&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/117241d1-8482-3226-87b6-8d97d05fb640_320_59aa4b9c-164e-4acc-910a-52acd51694a3.png",
//       },
//       {
//         id: "49",
//         name: "Butterfly Kiss",
//         views: "300M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0802837f1b604525adeaf86433838d54&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/16e7deae-f8d0-3117-bd70-a9860e3b4abe_320_6e6e1f24-bf6b-470c-be8e-7e601021d275.png",
//       },
//       {
//         id: "50",
//         name: "FILM CAM x MOCHA",
//         views: "200M+ counting",
//         link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=abbcf62da0f543bbaefdca897bb34302&metadata=01",
//         codeImage:
//           "https://snapcodes.storage.googleapis.com/png/4029e868-6ac2-38d6-88e4-c505ced9fecf_320_86c81e0d-facd-4708-8fcd-20276a956035.png",
//       },
//     ]);
//   }, [setTheme]);

//   const tabVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const sidebarVariants = {
//     hidden: { x: -300 },
//     visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   const navItems = [
//     { id: "about", icon: User, label: "About" },
//     { id: "experience", icon: Briefcase, label: "Experience" },
//     { id: "education", icon: GraduationCap, label: "Education" },
//     { id: "projects", icon: Code, label: "Projects" },
//     { id: "skills", icon: ChevronRight, label: "Skills" },
//     { id: "achievements", icon: Award, label: "Achievements" },
//     { id: "blog", icon: BookOpen, label: "Blog Posts" },
//     { id: "snapchat", icon: FaSnapchat, label: "Snapchat Filters" },
//     { id: "photography", icon: Camera, label: "Photography" },
//   ];

//   const socialLinks = [
//     {
//       icon: FaGithub,
//       href: "https://github.com/sakethyalamanchili",
//       label: "GitHub",
//     },
//     {
//       icon: FaLinkedin,
//       href: "https://www.linkedin.com/in/sakethyalamanchili/",
//       label: "LinkedIn",
//     },
//     {
//       icon: FaInstagram,
//       href: "https://www.instagram.com/sakethyalamanchili",
//       label: "Instagram",
//     },
//     {
//       icon: FaSnapchat,
//       href: "https://www.snapchat.com/add/saketh05",
//       label: "Snapchat",
//     },
//     {
//       icon: FaMedium,
//       href: "https://medium.com/@sakethyalamanchili",
//       label: "Medium",
//     },
//     {
//       icon: FaKaggle,
//       href: "https://www.kaggle.com/sakethyalamanchili",
//       label: "Kaggle",
//     },
//     { icon: Mail, href: "mailto:syalamanchil2025@fau.edu", label: "Email" },
//   ];

//   if (!isClient) {
//     return null;
//   }

//   const Sidebar = ({ isMobile = false }) => (
//     <ScrollArea className="h-full">
//       <div className="flex flex-col h-full px-6 py-8">
//         <div className="flex flex-col items-center mb-12">
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <Avatar className={`w-32 h-32 mb-4 ring-2 ring-offset-4 transition-all duration-300 hover:ring-4 ${
//               theme === "dark" ? "ring-blue-500/40 ring-offset-slate-900" : "ring-blue-500/30 ring-offset-white"
//             }`}>
//               <AvatarImage
//                 src="https://github.com/sakethyalamanchili.png"
//                 alt="Saketh Yalamanchili"
//               />
//               <AvatarFallback>SY</AvatarFallback>
//             </Avatar>
//           </motion.div>
//           <motion.h1
//             className={`text-base font-light mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Saketh Yalamanchili
//           </motion.h1>
//           <motion.p
//             className={`text-xs font-light text-center px-2 ${
//               theme === "dark" ? "text-gray-500" : "text-gray-600"
//             }`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Data Scientist • Software Developer • AR Creator
//           </motion.p>
//         </div>
//         <nav className="flex-grow mb-8">
//           <ul className="space-y-1">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.05 * index }}
//               >
//                 <Button
//                   variant="ghost"
//                   className={`w-full justify-start font-light text-sm transition-all duration-300 ${
//                     activeTab === item.id
//                       ? theme === "dark"
//                         ? "bg-white/5 text-white border-l-2 border-blue-500"
//                         : "bg-gray-900/5 text-gray-900 border-l-2 border-blue-500"
//                       : theme === "dark"
//                       ? "text-gray-400 hover:text-white hover:bg-white/5"
//                       : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/5"
//                   }`}
//                   onClick={() => {
//                     setActiveTab(item.id);
//                     if (isMobile) {
//                       setIsMobileMenuOpen(false);
//                     }
//                   }}
//                 >
//                   <item.icon className="mr-3 h-4 w-4" />
//                   {item.label}
//                 </Button>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>
//         <div className={`pt-6 border-t ${
//           theme === "dark" ? "border-white/5" : "border-gray-900/5"
//         }`}>
//           <div className="grid grid-cols-4 gap-2">
//             {socialLinks.map((link, index) => (
//               <TooltipProvider key={index}>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <motion.a
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
//                         theme === "dark"
//                           ? "hover:bg-white/5 text-gray-400 hover:text-white"
//                           : "hover:bg-gray-900/5 text-gray-600 hover:text-gray-900"
//                       }`}
//                       whileHover={{ scale: 1.1, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <link.icon className="h-4 w-4" />
//                     </motion.a>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p className="text-xs">{link.label}</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             ))}
//           </div>
//         </div>
//       </div>
//     </ScrollArea>
//   );

//   return (
//     <div
//       className={`min-h-screen relative ${
//         theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="flex flex-col md:flex-row relative z-10">
//         {/* Mobile header */}
//         <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon">
//                 <Menu className="h-4 w-4" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="left"
//               className={`w-64 p-0 ${
//                 theme === "dark"
//                   ? "bg-[#161B22] border-r border-[#30363D]"
//                   : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
//               }`}
//             >
//               <Sidebar isMobile={true} />
//             </SheetContent>
//           </Sheet>
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <Switch
//               checked={theme === "dark"}
//               onCheckedChange={() =>
//                 setTheme(theme === "dark" ? "light" : "dark")
//               }
//             />
//           </motion.div>
//         </div>

//         {/* Desktop sidebar */}
//         <motion.div
//           className={`hidden md:block w-64 h-screen fixed left-0 top-0 ${
//             theme === "dark"
//               ? "bg-slate-900/50 border-r border-white/5 backdrop-blur-xl"
//               : "bg-white/50 border-r border-gray-900/5 backdrop-blur-xl"
//           }`}
//           initial="hidden"
//           animate="visible"
//           variants={sidebarVariants}
//         >
//           <Sidebar />
//         </motion.div>

//         {/* Main content */}
//         <motion.div
//           className="flex-1 p-4 md:p-8 md:ml-64"
//           initial="hidden"
//           animate="visible"
//           variants={contentVariants}
//         >
//           {/* Desktop theme toggle */}
//           <div className="hidden md:flex justify-end mb-4">
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <Switch
//                 checked={theme === "dark"}
//                 onCheckedChange={() =>
//                   setTheme(theme === "dark" ? "light" : "dark")
//                 }
//                 className="mr-2"
//               />
//             </motion.div>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               {theme === "dark" ? (
//                 <Moon className="h-5 w-5" />
//               ) : (
//                 <Sun className="h-5 w-5" />
//               )}
//             </motion.span>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={tabVariants}
//             >
//               {activeTab === "hero" && showHero && (
//                 <HeroSection
//                   theme={theme === "dark" ? "dark" : "light"}
//                   onExploreClick={() => {
//                     setActiveTab("about");
//                     setShowHero(false);
//                   }}
//                 />
//               )}
//               {activeTab === "about" && (
//                 <About theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "experience" && (
//                 <Experience theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "education" && (
//                 <Education theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "projects" && (
//                 <Projects theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "skills" && (
//                 <Skills theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "achievements" && (
//                 <Achievements theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "photography" && (
//                 <Photography theme={theme === "dark" ? "dark" : "light"} />
//               )}
//               {activeTab === "blog" && (
//                 <BlogPosts
//                   posts={mediumPosts}
//                   theme={theme === "dark" ? "dark" : "light"}
//                 />
//               )}
//               {activeTab === "snapchat" && (
//                 <SnapchatFilters
//                   filters={snapchatFilters}
//                   theme={theme === "dark" ? "dark" : "light"}
//                 />
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </div>
//       <ScrollToTop theme={theme === "dark" ? "dark" : "light"} />
//     </div>
//   );
// }






"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
// Removed unneeded Card imports here since they are handled inside components now
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  Code,
  GraduationCap,
  Mail,
  Briefcase,
  User,
  Award,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  ChevronDown,
  Sparkles,
  Camera,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaSnapchat,
  FaMedium,
  FaInstagram,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Dynamically import client-side components
const About = dynamic(() => import("./About"), { ssr: false });
const Education = dynamic(() => import("./Education"), { ssr: false });
const Experience = dynamic(() => import("./Experience"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const BlogPosts = dynamic(() => import("./BlogPosts"), { ssr: false });
const SnapchatFilters = dynamic(() => import("./SnapchatFilters"), {
  ssr: false,
});
const Achievements = dynamic(() => import("./Achievements"), { ssr: false });
const Photography = dynamic(() => import("./Photography"), { ssr: false });

// Built-in Scroll to Top Component
const ScrollToTop: React.FC<{ theme: "dark" | "light" }> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-blue-500/50"
              : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-blue-400/50"
          }`}
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};


interface BlogPost {
  guid: string;
  title: string;
  pubDate: string;
  link: string;
}

interface SnapchatFilter {
  id: string;
  name: string;
  views: string;
  link: string;
  codeImage: string;
}

interface HeroSectionProps {
  theme: "dark" | "light";
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme, onExploreClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let startTime: number;
      let animationFrame: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);
    return count;
  };

  const viewsCount = useCounter(150);
  const followersCount = useCounter(750);
  const lensesCount = useCounter(300);
  const gpaCount = useCounter(40) / 10;

  const stats = [
    { value: `${viewsCount}B+`, label: "Total Views", delay: 0, icon: "📊" },
    { value: `${followersCount}K+`, label: "Followers", delay: 0.1, icon: "👥" },
    { value: `${lensesCount}+`, label: "AR Lenses", delay: 0.2, icon: "🎨" },
    { value: gpaCount.toFixed(1), label: "GPA", delay: 0.2, icon: "🎓" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Enhanced Background with Grid Pattern */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
              : "bg-gradient-to-br from-white via-slate-50 to-white"
          }`}
        />
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px), linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
          }}
          animate={{
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-15"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * 1.5,
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-gray-900/5 border-gray-900/10"
              }`}
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Available for Opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className={`text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 font-light ${
              theme === "dark" ? "text-blue-400/70" : "text-blue-600/70"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Data Scientist • Software Developer • AR Creator
          </motion.p>

          {/* Name with Enhanced Animation */}
          <div className="mb-10 md:mb-12 px-2 sm:px-4 max-w-[90vw] mx-auto">
            <h1
              className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight text-balance ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block"
              >
                SAKETH
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block relative"
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                  YALAMANCHILI
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.span>
            </h1>
          </div>

          {/* Enhanced Stats with Icons */}
          <motion.div
            className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 group overflow-hidden ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10 hover:border-gray-900/20"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + stat.delay, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow:
                    theme === "dark"
                      ? "0 20px 40px rgba(59, 130, 246, 0.3)"
                      : "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="text-2xl mb-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div
                    className={`text-3xl md:text-4xl lg:text-5xl font-extralight mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </motion.div>
                  <div
                    className={`text-xs md:text-sm font-light tracking-wider uppercase ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.button
            onClick={onExploreClick}
            className={`relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-500 border text-sm md:text-base font-light tracking-wide min-h-[44px] min-w-[44px] group ${
              theme === "dark"
                ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white backdrop-blur-xl"
                : "bg-gray-900/5 hover:bg-gray-900/10 border-gray-900/10 hover:border-gray-900/20 text-gray-900 backdrop-blur-xl"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                theme === "dark"
                  ? "0 20px 40px rgba(59, 130, 246, 0.4)"
                  : "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        >
          <ChevronDown
            className={`w-5 h-5 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [mediumPosts, setMediumPosts] = useState<BlogPost[]>([]);
  const [snapchatFilters, setSnapchatFilters] = useState<SnapchatFilter[]>([]);
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("hero");
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    setIsClient(true);
    // Set the default theme to dark
    setTheme("dark");

    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethyalamanchili"
    )
      .then((response) => response.json())
      .then((data) => setMediumPosts(data.items));

    setSnapchatFilters([
      {
        id: "1",
        name: "low exposure sharp",
        views: "15B+ counting",
        link: "https://www.snapchat.com/lens/f6476c9100404360912c2f50c76be9f6?sender_web_id=4dea06cb-3692-4885-be38-f367bcd5959a&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=f6476c9100404360912c2f50c76be9f6&version=1&type=svg",
      },
      // ... (Using the same full list of 50 filters as previously provided in context)
      // I am keeping the data setup exactly as it was in your previous file
      {
        id: "2",
        name: "MACBOOK BW x GRAIN",
        views: "17B+ counting",
        link: "https://www.snapchat.com/lens/3e3089b84f244bd7a3a692103a4d490d?type=SNAPCODE&metadata=01",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=3e3089b84f244bd7a3a692103a4d490d&version=1&type=svg",
      },
      {
        id: "3",
        name: "FILM CAM",
        views: "13B+ counting",
        link: "https://www.snapchat.com/lens/8cb9093d0af94467beaf241fbd5f8deb?sender_web_id=4454df49-3495-45f4-bc1c-7a8ebd809a3c&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=8cb9093d0af94467beaf241fbd5f8deb&version=1&type=svg",
      },
      {
        id: "4",
        name: "MACBOOK BNW",
        views: "14B+ counting",
        link: "https://www.snapchat.com/lens/738ca1236ade447f95287ee74e2f16ed?sender_web_id=41287078-3783-4d1c-8420-a4187b32c554&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=738ca1236ade447f95287ee74e2f16ed&version=1&type=svg",
      },
      {
        id: "5",
        name: "Vintage BNW",
        views: "7B+ counting",
        link: "https://www.snapchat.com/lens/f35c0c4968954be7bf3c0bf784876f45?sender_web_id=9827ed68-fa8e-443f-b6e1-394da543e03d&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=f35c0c4968954be7bf3c0bf784876f45&version=1&type=svg",
      },
      {
        id: "6",
        name: "pretty",
        views: "5B+ counting",
        link: "https://www.snapchat.com/lens/7a4097cae92745dd89e28619ab23b688?sender_web_id=2b0673a5-4717-49ca-9dda-904a73582353&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=7a4097cae92745dd89e28619ab23b688&version=1&type=svg",
      },
      {
        id: "7",
        name: "DARK",
        views: "5B+ counting",
        link: "https://www.snapchat.com/lens/e45121661d0e40dbac00adc71476f757?sender_web_id=9b91ee9c-92df-4bcf-94e7-2b374ea4a189&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=e45121661d0e40dbac00adc71476f757&version=1&type=svg",
      },
      {
        id: "8",
        name: "Cupid Crown BW x G",
        views: "5B+ counting",
        link: "https://www.snapchat.com/lens/052ebd1e4c3442688196bd4c4a5cb827?sender_web_id=2ba3b995-61b2-4936-ac84-f9d1cd4254b2&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=052ebd1e4c3442688196bd4c4a5cb827&version=1&type=svg",
      },
      {
        id: "9",
        name: "achromatic",
        views: "4B+ counting",
        link: "https://www.snapchat.com/lens/ab7c06e47fa24214b5a7cab13ed4310b?sender_web_id=3729ff05-f656-48eb-9058-2c4d3f7d6028&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=ab7c06e47fa24214b5a7cab13ed4310b&version=1&type=svg",
      },
      {
        id: "10",
        name: "low exposure",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/7c6bd6a9ab784a769deff5e64b7ecd00?sender_web_id=6e8a0a56-3aab-4a3c-979d-921c6c5c8f2f&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=7c6bd6a9ab784a769deff5e64b7ecd00&version=1&type=svg",
      },
      {
        id: "11",
        name: "Cupid Crown",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/51609f9a55fe43ddbf4bafff47ff9d1a?sender_web_id=90a32dc7-07ed-4825-80b6-6cf9beb3a10a&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=51609f9a55fe43ddbf4bafff47ff9d1a&version=1&type=svg",
      },
      {
        id: "12",
        name: "Deep moody",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/865823d263b249119832aa7adf948b42?sender_web_id=536efae2-a973-455b-ad1d-18f04112f7e8&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=865823d263b249119832aa7adf948b42&version=1&type=svg",
      },
      {
        id: "13",
        name: "Hearts Mood",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/e5e21255b0ae4e60805196a9840ea8cd?sender_web_id=cc4d20de-e3c7-4481-91a1-e6796805f835&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=e5e21255b0ae4e60805196a9840ea8cd&version=1&type=svg",
      },
      {
        id: "14",
        name: "BlossomBliss",
        views: "2B+ counting",
        link: "https://www.snapchat.com/lens/c6c197f7c69d4cb5b4d96dc1256acd5d?sender_web_id=5251e0a9-92ea-490f-9df4-95dcdf2501ab&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=c6c197f7c69d4cb5b4d96dc1256acd5d&version=1&type=svg",
      },
      {
        id: "15",
        name: "Grainy BNW-2",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/e4a239547c704a38b79b3cff3eaa6cc9?sender_web_id=43baf1ae-607e-401c-b59c-a6bcf4592840&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=e4a239547c704a38b79b3cff3eaa6cc9&version=1&type=svg",
      },
      {
        id: "16",
        name: "BlossomBliss Grain",
        views: "2B+ counting",
        link: "https://www.snapchat.com/lens/6725ccfebde24b3e8b54b6f4691788af?sender_web_id=06e625ff-aa4f-4690-b610-7d6123d6b16b&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=6725ccfebde24b3e8b54b6f4691788af&version=1&type=svg",
      },
      {
        id: "17",
        name: "Album BNW",
        views: "2B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a7dea132d23b4c5c9dc72788fdd9dc53&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/8fa3c60e-8909-36b4-8863-e00e159c2446_320_3d2393da-2554-4a9d-b812-59b1d60bfc03.png",
      },
      {
        id: "18",
        name: "natural",
        views: "1B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=255c7597286447cb8773c5668b1cac5a&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/b755e613-c4b2-3f59-b280-fde6b20eca5e_320_e9d5aeff-9ef3-4d90-98eb-1945ae57cbfc.png",
      },
      {
        id: "19",
        name: "Grainy BNW",
        views: "2B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fd7f029cb0064d88b73189f7b96837a9&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/7401f897-7aa6-3ccf-a941-4cf9a74a17ce_320_89fb184c-dbdd-4d9e-8cc1-dbe38ce87d1a.png",
      },
      {
        id: "20",
        name: "MACBOOK EFFECT",
        views: "2B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8759a8433a15431ab0bc8e01a7a76942&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/4af08aa8-0007-331f-829b-c080bfcd84f7_320_cb4fd0db-ee40-4450-9e28-ca184ab63279.png",
      },
      {
        id: "21",
        name: "Cross BNW",
        views: "2B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=452fc5100a7d442c84465048c35d098d&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/9fd585a9-3405-3930-8b8c-ad7e089c2631_320_fd77a151-8cb5-4fc5-80d7-4d26804b0b11.png",
      },
      {
        id: "22",
        name: "Days Of The Week",
        views: "2B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2fa8db46bd78480a981b459b666e6303&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/87b25931-7b74-3175-8e96-68fea2711f04_320_4db2d92f-0b58-40f0-8f56-8569b55c29e6.png",
      },
      {
        id: "23",
        name: "Cupid Crown BNW",
        views: "2B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=599050da09bd4fa2862d546a4a12053a&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/a963296a-6226-3352-8721-57cf3cd9a249_320_fa02c3b4-414b-4542-a7b2-87da298714a7.png",
      },
      {
        id: "24",
        name: "BEAR BLISS x GRAIN",
        views: "3B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=cf7b2e6888e8491882166f9b869b8d44&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/0d04dec7-2cee-363e-9e49-6f726764a66d_320_9ae94d99-3476-4040-88a9-98a8010bc029.png",
      },
      {
        id: "25",
        name: "M00DY",
        views: "3B+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7752170cc7914ad49fb23cbaf2bb48f7&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/a9f40a8a-f909-31f0-9b60-57bed730baca_320_cbf61959-d849-4e03-b509-add173eb683f.png",
      },
      {
        id: "26",
        name: "VINTAGE",
        views: "900M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=78b6463522784c788df69af5b2f49599&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/8ed2035c-5a0e-3020-9d6e-a0a1d4f19bba_320_c8c9908b-60c6-44ba-9b79-b8192911fa82.png",
      },
      {
        id: "27",
        name: "Aesthetic day",
        views: "700M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fc3aa25c44314298b596d3b63b2b00f1&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/10210439-4bc7-3b6d-a439-c445a0f99120_320_78b9a355-09ea-43eb-8619-05cf613c298e.png",
      },
      {
        id: "28",
        name: "Avril",
        views: "700M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b428b183f43643e3b1d23f14409ec52c&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/33896853-a5a4-3f24-9aaf-dc6a3aa3f1ea_320_1f3c8ca0-2c9d-4987-84a3-a4858b2d1908.png",
      },
      {
        id: "29",
        name: "70s Aesthetic",
        views: "800M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d528500d0f914323a0823bfcf4799377&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/7c5168d6-b79a-3979-9ae8-b923123a4396_320_f9deda53-0f4b-4918-80fb-b0aef001257d.png",
      },
      {
        id: "30",
        name: "Bella",
        views: "500M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e1e05e070c294b4e8f00f2677aa38d46&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/bcac6e85-c893-35b6-a25b-4976e3610624_320_2fd61ec3-e0b1-4a9b-900c-ff6b6026a7ae.png",
      },
      {
        id: "31",
        name: "Arch BNW",
        views: "600M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e080f723b6014e1c9941a86705e07970&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/f45ccc5e-693b-36c3-94f5-488961bb9687_320_b28d9d5c-2392-4401-b58e-073ccbeb2878.png",
      },
      {
        id: "32",
        name: "snapshot",
        views: "600M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f317dac77ad54627996f09adcd144746&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/544d8c75-31b5-39e2-adb2-c1df4d1fdd3e_320_775384f8-624f-45af-95c8-45cb10d73f27.png",
      },
      {
        id: "33",
        name: "Aloha",
        views: "600M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f98615580a9b4a96a71063387e97624b&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/257666fb-3c81-3bf2-9f2c-4b49d37b6b46_320_49200826-fca3-4792-9f14-37a8b07b35dc.png",
      },
      {
        id: "34",
        name: "Ivy",
        views: "500M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=94c4946752884e328a8c8e9f1c2d35dc&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/e2f948ce-734b-371a-870f-0a192e96754e_320_eef2c510-759c-4e18-9e13-5fb3b7f49239.png",
      },
      {
        id: "35",
        name: "Morana",
        views: "500M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e2e129c6899472889818376fe7f1ef9&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/8e0e728a-323a-3646-b63f-5cc4732d8cb1_320_cf7daa38-9b9e-44f6-b3d3-3a52ea6264ea.png",
      },
      {
        id: "36",
        name: "Arch sharp",
        views: "400M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=679ffbe93a1c491d97d0b5ce4bdf186d&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/565a6145-6f91-3a79-86cb-6a12adfd4b81_320_7cfb3fad-f43e-4754-8a51-f402496b9f63.png",
      },
      {
        id: "37",
        name: "Moment in Time",
        views: "400M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=72fb1cc43e8d41da87eb3c497e0cd80d&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/b359ac69-3714-300d-9c01-8072defdf3ba_320_16406347-c36b-4538-a028-1e52fa8a9ed6.png",
      },
      {
        id: "38",
        name: "Arch dark",
        views: "400M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dcf884ae83de4fbeaa4163ebcadf4c5c&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/7ebc7b24-8d8a-3cde-813e-e411ca42e046_320_5c7e81c4-803d-4274-9766-f8df06d01f47.png",
      },
      {
        id: "39",
        name: "Galatea",
        views: "400M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c80f57653cf44dcebe310014656e937c&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/22aa90c3-0abb-39b6-bf38-f5c67d514414_320_5471aaba-3617-4798-b701-8783eea4e8db.png",
      },
      {
        id: "40",
        name: "Travis Scott",
        views: "300M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8b3407496ee44670b7cd09029b93fa71&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/63c43ffb-6560-3b4d-9ea5-f4f38d96018e_320_bd3a6590-deab-48e7-81e9-a74c4eaf498f.png",
      },
      {
        id: "41",
        name: "vivid",
        views: "300M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=122482f6280c4d9fbdf1cd05ef9cbd14&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/12bbcecf-b6ba-33eb-b8ba-4a0958a67ca0_320_47ae8e8c-2306-481b-8499-551cd4e4fca8.png",
      },
      {
        id: "42",
        name: "Halcyon",
        views: "300M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5091ee5e271d433bba4e8b507320d3b5&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/b8858a91-4a8e-3606-b47c-988ff637ab8b_320_583815e4-a6d9-441c-b2fa-6720b79c0681.png",
      },
      {
        id: "43",
        name: "Bear Bliss",
        views: "300M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=4ae2015aa2124abc9bd0de0487a2645f&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/f3cf7ebc-7b4b-39ad-b590-9edf22deb77f_320_9403ea44-1029-436d-a1f4-66d64140048b.png",
      },
      {
        id: "44",
        name: "espresso",
        views: "200M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aeea456d4c214543ad114bfbbb939965&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/5c07900f-0057-30f9-a12d-1ac889d69b93_320_60a29392-e6d1-41eb-a143-3eb4007685d3.png",
      },
      {
        id: "45",
        name: "TIME",
        views: "200M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=35af50eb034e4b0291cc20247ccf40fa&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/be0be1a7-cab1-344f-8d72-19307b343a39_320_b44d3e39-7e97-4e02-9bb6-b373a9e39336.png",
      },
      {
        id: "46",
        name: "Aphrodite Sharp",
        views: "200M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7adcd126048c4fe5ac2519b2d6874032&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/9a740fb3-0390-3513-8264-1ee6b39fa361_320_69ec0d3c-713b-4965-bdbf-851bddbc8c55.png",
      },
      {
        id: "47",
        name: "Polaroid-3",
        views: "100M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f96ec8b95061478ea7545fdfe45e7b83&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/7630ccd9-b788-37b1-a33f-47ee8f980e8e_320_53a1d4ed-3a54-4b24-9c69-9a3d565f2242.png",
      },
      {
        id: "48",
        name: "Aesthetic crown V2",
        views: "300M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=766f9afd452849f9ad8d8a61aaba76aa&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/117241d1-8482-3226-87b6-8d97d05fb640_320_59aa4b9c-164e-4acc-910a-52acd51694a3.png",
      },
      {
        id: "49",
        name: "Butterfly Kiss",
        views: "300M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0802837f1b604525adeaf86433838d54&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/16e7deae-f8d0-3117-bd70-a9860e3b4abe_320_6e6e1f24-bf6b-470c-be8e-7e601021d275.png",
      },
      {
        id: "50",
        name: "FILM CAM x MOCHA",
        views: "200M+ counting",
        link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=abbcf62da0f543bbaefdca897bb34302&metadata=01",
        codeImage:
          "https://snapcodes.storage.googleapis.com/png/4029e868-6ac2-38d6-88e4-c505ced9fecf_320_86c81e0d-facd-4708-8fcd-20276a956035.png",
      },
    ]);
  }, [setTheme]);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sidebarVariants = {
    hidden: { x: -300 },
    visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const navItems = [
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "skills", icon: ChevronRight, label: "Skills" },
    { id: "achievements", icon: Award, label: "Achievements" },
    { id: "blog", icon: BookOpen, label: "Blog Posts" },
    { id: "snapchat", icon: FaSnapchat, label: "Snapchat Filters" },
    { id: "photography", icon: Camera, label: "Photography" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/sakethyalamanchili",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sakethyalamanchili/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/sakethyalamanchili",
      label: "Instagram",
    },
    {
      icon: FaSnapchat,
      href: "https://www.snapchat.com/add/saketh05",
      label: "Snapchat",
    },
    {
      icon: FaMedium,
      href: "https://medium.com/@sakethyalamanchili",
      label: "Medium",
    },
    {
      icon: FaKaggle,
      href: "https://www.kaggle.com/sakethyalamanchili",
      label: "Kaggle",
    },
    { icon: Mail, href: "mailto:syalamanchil2025@fau.edu", label: "Email" },
  ];

  if (!isClient) {
    return null;
  }

  const Sidebar = ({ isMobile = false }) => (
    <ScrollArea className="h-full">
      <div className="flex flex-col h-full px-6 py-8">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            <Avatar className={`w-32 h-32 mb-4 ring-2 ring-offset-4 transition-all duration-300 hover:ring-4 ${
              theme === "dark" ? "ring-blue-500/40 ring-offset-slate-900" : "ring-blue-500/30 ring-offset-white"
            }`}>
              <AvatarImage
                src="https://github.com/sakethyalamanchili.png"
                alt="Saketh Yalamanchili"
              />
              <AvatarFallback>SY</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1
            className={`text-base font-light mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Saketh Yalamanchili
          </motion.h1>
          <motion.p
            className={`text-xs font-light text-center px-2 ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Data Scientist • Software Developer • AR Creator
          </motion.p>
        </div>
        <nav className="flex-grow mb-8">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start font-light text-sm transition-all duration-300 ${
                    activeTab === item.id
                      ? theme === "dark"
                        ? "bg-white/5 text-white border-l-2 border-blue-500"
                        : "bg-gray-900/5 text-gray-900 border-l-2 border-blue-500"
                      : theme === "dark"
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/5"
                  }`}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isMobile) {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className={`pt-6 border-t ${
          theme === "dark" ? "border-white/5" : "border-gray-900/5"
        }`}>
          <div className="grid grid-cols-4 gap-2">
            {socialLinks.map((link, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                        theme === "dark"
                          ? "hover:bg-white/5 text-gray-400 hover:text-white"
                          : "hover:bg-gray-900/5 text-gray-600 hover:text-gray-900"
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon className="h-4 w-4" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );

  return (
    <div
      className={`min-h-screen relative ${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col md:flex-row relative z-10">
        {/* Mobile header */}
        <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className={`w-64 p-0 ${
                theme === "dark"
                  ? "bg-[#161B22] border-r border-[#30363D]"
                  : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
              }`}
            >
              <Sidebar isMobile={true} />
            </SheetContent>
          </Sheet>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            />
          </motion.div>
        </div>

        {/* Desktop sidebar */}
        <motion.div
          className={`hidden md:block w-64 h-screen fixed left-0 top-0 ${
            theme === "dark"
              ? "bg-slate-900/50 border-r border-white/5 backdrop-blur-xl"
              : "bg-white/50 border-r border-gray-900/5 backdrop-blur-xl"
          }`}
          initial="hidden"
          animate="visible"
          variants={sidebarVariants}
        >
          <Sidebar />
        </motion.div>

        {/* Main content */}
        <motion.div
          className="flex-1 p-4 md:p-8 md:ml-64"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          {/* Desktop theme toggle */}
          <div className="hidden md:flex justify-end mb-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="mr-2"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </motion.span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tabVariants}
            >
              {activeTab === "hero" && showHero && (
                <HeroSection
                  theme={theme === "dark" ? "dark" : "light"}
                  onExploreClick={() => {
                    setActiveTab("about");
                    setShowHero(false);
                  }}
                />
              )}
              {activeTab === "about" && (
                <About theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "experience" && (
                <Experience theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "education" && (
                <Education theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "projects" && (
                <Projects theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "skills" && (
                <Skills theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "achievements" && (
                <Achievements theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "photography" && (
                <Photography theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "blog" && (
                <BlogPosts
                  posts={mediumPosts}
                  theme={theme === "dark" ? "dark" : "light"}
                />
              )}
              {activeTab === "snapchat" && (
                <SnapchatFilters
                  filters={snapchatFilters}
                  theme={theme === "dark" ? "dark" : "light"}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <ScrollToTop theme={theme === "dark" ? "dark" : "light"} />
    </div>
  );
}