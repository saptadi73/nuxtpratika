<template>
  <div>
    <nav-bar-menu/>
    <div class="w-[80vw] mx-auto mt-32">
      <h1 class="text-2xl font-extrabold text-center my-10 2xl:text-4xl font-lexend">
        {{ filteredProduct[0]?.ProductTitle }}
      </h1>
      <div
        class="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 2xl:grid-cols-4 justify-center"
      >
        <div 
        v-for="productku in filteredProduct[0]?.product"
        :key="productku.id"
        class="mx-auto">
          <div
            class="group inline-block pb-4 bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-2xl shadow hover:shadow-md transition"
          >
            <div class="max-h-64 aspect-square overflow-hidden">
              <img
                class="w-full h-auto object-cover transition-all duration-500 group-hover:scale-125"
                :src="productku.image"
              />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold font-montserrat">{{ productku.name }}</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <footer-depan/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBarMenu from "~/component/NavBarMenu.vue";
import FooterDepan from "~/component/FooterDepan.vue";
import capasitor_wire_assy from "../../assets/images/assembly/capacitor_wire_assy1.webp";
import holder_coupling from "../../assets/images/assembly/holder_coupling1.webp";
import spin_motor_plate from "../../assets/images/assembly/spin_motor_plate1.webp";
import brassnut from "../../assets/images/metal_machining/brasnut_1.webp";
import collar_metal_machining from "../../assets/images/metal_machining/collar_9.webp";
import manifold_metal_machining from "../../assets/images/metal_machining/manifold_8.webp";
import tube_metal_machining from "../../assets/images/metal_machining/tube1.webp";
import cable_clip from "../../assets/images/metal_stamping/cableclip_1.webp";
import flat_spring from "../../assets/images/metal_stamping/flatspring_1.webp";
import nut_clip from "../../assets/images/metal_stamping/nutclip_1.webp";
import seat_lock from "../../assets/images/metal_stamping/seatlock_101.webp";
import tube_end from "../../assets/images/metal_stamping/tube_end1.webp";
import c_shapes from "../../assets/images/Piping_Tubing/c_shaped1.webp";
import collar_10mm from "../../assets/images/Piping_Tubing/collar10mm_2.webp";
import collar_12mm from "../../assets/images/Piping_Tubing/collar12mm_3.webp";
import collar_16mm from "../../assets/images/Piping_Tubing/collar16mm_1.webp";
import l_pipe from "../../assets/images/Piping_Tubing/l_pipe1.webp";
import manifold_piping_tubing from "../../assets/images/Piping_Tubing/manifold1.webp";
import suction from "../../assets/images/Piping_Tubing/suction1.webp";
import tube_assy_piping_tubing from "../../assets/images/Piping_Tubing/tube_assy1.webp";

const filteredProduct = ref([]);

const ProductData = [
    {
        id: 1,
        ProductTitle:"Assembly",
        product: [
            {
                id_product: 1,
                name: "Capasitor Wire Assy",
                image: capasitor_wire_assy,
            },
            {
                id_product: 2,
                name: "Holder Coupling",
                image: holder_coupling,
            },
            {
                id_product: 3,
                name: "Spin Motor Plate",
                image: spin_motor_plate,
            },
        ],
    },
    {
        id: 2,
        ProductTitle: "Metal Machining",
        product: [
            {
                id_product: 4,
                name: "Brass Nut",
                image: brassnut,
            },
            {
                id_product: 5,
                name: "Collar",
                image: collar_metal_machining,
            },
            {
                id_product: 6,
                name: "Manifold",
                image: manifold_metal_machining,
            },
            {
                id_product: 7,
                name: "Tube",
                image: tube_metal_machining,
            },
        ],
    },
    {
        id: 3,
        ProductTitle: "Metal Stamping",
        product: [
            {
                id_product: 8,
                name: "Cable Clip",
                image: cable_clip,
            },
            {
                id_product: 9,
                name: "Flat Spring",
                image: flat_spring,
            },
            {
                id_product: 10,
                name: "Nut Clip",
                image: nut_clip,
            },
            {
                id_product: 11,
                name: "Seat Lock",
                image: seat_lock,
            },
            {
                id_product: 12,
                name: "Tube End",
                image: tube_end,
            },
        ],
    },
    {
        id: 4,
        ProductTitle: "Piping and Tubing",
        product: [
            {
                id_product: 13,
                name: "C Shaped",
                image: c_shapes,
            },
            {
                id_product: 14,
                name: "L Pipe",
                image: l_pipe,
            },
            {
                id_product: 15,
                name: "Collar 10 mm",
                image: collar_10mm,
            },
            {
                id_product: 16,
                name: "Collar 12 mm",
                image: collar_12mm,
            },
            {
                id_product: 17,
                name: "Collar 16 mm",
                image: collar_16mm,
            },
            {
                id_product: 18,
                name: "Manifold",
                image: manifold_piping_tubing,
            },
            {
                id_product: 19,
                name: "Suction",
                image: suction,
            },
            {
                id_product: 20,
                name: "Tube Assy",
                image: tube_assy_piping_tubing,
            },
        ],
    },
];

onMounted(() => {
  const route = useRoute()
  const productID = route.params.id // Ambil id dari URL

  filteredProduct.value = ProductData.filter(
    (productMain) => productMain.id === parseInt(productID),
  )


})

</script>

<style lang="scss" scoped></style>
