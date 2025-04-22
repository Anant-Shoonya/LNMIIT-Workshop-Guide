import React, { useState } from "react";
import "../styles/Theory.css";

const Theory = () => {
    const labData = [
        {
          name: "Engineering Physical Metallurgy",
          semester: "2nd Semester",
          documents: [
            { title: "Cast Irons", url: "https://docs.google.com/presentation/d/1qwYfKbbICGNxQERNy90dMyDu6hSslSV-/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Effect of SAW process", url: "https://docs.google.com/presentation/d/1OZkF7mca2n2IYhZHN6vraFudL8Q1-ldd/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Heat Treating", url: "https://docs.google.com/presentation/d/1g24fkraLxav1uDU2pohaGadG7ZDFLJsd/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "HeatTreatment", url: "https://drive.google.com/file/d/1uUau-7pNAlv1dEmwKln23f0SnZ-ahPGa/view?usp=sharing" },
            { title: "Introduction to Stainless Steel", url: "https://docs.google.com/presentation/d/1JPTyq_KG-31qG3_fTKdLk3ERngLuP8wy/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Surface Hardening of Steels", url: "https://docs.google.com/presentation/d/1_JuU7jFr_6mEr6WQZGvcr1g6m1YqqbX_/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Surface Hardening of Steels P-2", url: "https://docs.google.com/presentation/d/1PsXnuG3crC7EITmur-41etH92Cp7A1iM/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Iron carbon phase diagram", url: "https://docs.google.com/document/d/1m1FCEmaQ9qu8GtLgPuFQYmIcyFB0RLqc/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "MATERIAL SCIENCE", url: "https://docs.google.com/presentation/d/13SoG9k3E-mYCFj4UDWpcmeBe40cZIOVl/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "metal working process", url: "https://drive.google.com/file/d/1yMaVtK-uPq9diE2GF6VUIw3UoqlpXix6/view?usp=sharing" },
            { title: "RM Specification", url: "https://docs.google.com/document/d/1J8ZqWNZJARIDebkdQwFfOfdp6-35r02K/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "solidification of metals", url: "https://docs.google.com/presentation/d/1iUq9HRH56NAdt0SDyDAVSIFiQSexjpN5/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Surfacing", url: "https://docs.google.com/presentation/d/18yaB5ZAm8ZCw117pZjyeclHNIjV2ybLy/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" }
          ],
        },
        {
          name: "Welding and Casting",
          semester: "3rd Semester",
          documents: [
            { title: "10 Rules of Castings", url: "https://docs.google.com/document/d/1tbZ400Bd85_5jfxONI7lBWbPZkbrUfgK/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "14 Types of Casting", url: "https://docs.google.com/document/d/1hcamH2WDlXvXRCYxeZHJaLsgzALGdz9P/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "ADVANCED WELDING PROCESSES", url: "https://docs.google.com/document/d/1aiOHHmwR4X6bbMrI7kdfVCfk9-gUcwXi/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "EXPERT systems", url: "https://docs.google.com/document/d/1wfqPRw1jOdYDGgfpk3oZ1ihGfj0Xc_O_/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" }
          ],
        },
        {
          name: "MOS",
          semester: "3rd Semester",
          documents: [
            { title: "MOS L-1", url: "https://drive.google.com/file/d/1Oqws3pG1W9hjCmCrkZFT9kcnmVrCKTAt/view" },
            { title: "MOS L-2", url: "https://drive.google.com/file/d/1LIzmHZMT1pmBv3iwIYx0dOQIvMUcfEuz/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-3", url: "https://drive.google.com/file/d/1eudYsoVBLHny1c0LPW4Ae7QH8VkJlKRU/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-5", url: "https://drive.google.com/file/d/1tYx1QVnsd0kBr48HWUEsJJ9cn2yLkBCz/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-6", url: "https://drive.google.com/file/d/1x-xuf9MoNATE-TQHzk1Lag-Mf1tlnLN6/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-7", url: "https://drive.google.com/file/d/1wRc-HIN8gSh0j1j5mPeZds4bzJrWcOcA/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-8", url: "https://drive.google.com/file/d/1mAW1H7Qo1MbRx_ccSUeS3PDVhyJ3l58b/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-9", url: "https://drive.google.com/file/d/1KG3v5WvZfjO_59IBaiBk9zyamMhQ_UOS/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-10", url: "https://drive.google.com/file/d/1-RdNsqJjHqLTojEezbdOZCEJw2j8INS4/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-11", url: "https://drive.google.com/file/d/15xu8mx-faRRdGr2iJMrI5TQ0WwQqo0rB/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-12", url: "https://drive.google.com/file/d/1vDOjiO_4zkf5bjayaIjsR-EYDme8Q2AO/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-13", url: "https://drive.google.com/file/d/1sUOcR_paZtEiDMmOCosWMo_K_0nx75lc/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-14", url: "https://drive.google.com/file/d/17nD0V_fNfo_763QJgyFO1P77u1slW-UA/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-15", url: "https://drive.google.com/file/d/1xZwi41y5lZ-c2itWfHqmgDjOMIV_wPei/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-16", url: "https://drive.google.com/file/d/1x6GVulzLcAYwXJxXPhAV_555UJtKI_J6/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-17", url: "https://drive.google.com/file/d/11vVhj3NJOu0BgRFgGxK94imW6Ocz-nNd/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-18", url: "https://drive.google.com/file/d/1JUTwXL7Ixz5KzSN9WEJZvNpvwBYAKYS_/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-19", url: "https://drive.google.com/file/d/1mCuWTuF5TjcHqUfe2d1l6DI8SljFGAeo/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-20", url: "https://drive.google.com/file/d/1wjtfbrz3wtGOa1O1nyeOMxeXRQ3ZFEO_/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-21", url: "https://drive.google.com/file/d/1ZKVg6fbCb2o6bk5d8jMfzYhw54au7uJa/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-22", url: "https://drive.google.com/file/d/1OBtHOzrwDsAskPPLeR9Nb-dpGZ141XLJ/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-23", url: "https://drive.google.com/file/d/1gl6vgNpHKw5YnidFP3YF6B-TUFU5OUvB/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-24", url: "https://drive.google.com/file/d/1poW3YZeqPauXiYwTaUu0VY_PpZ_anq16/view?usp=classroom_web&authuser=0" },
            { title: "MOS L-25", url: "https://drive.google.com/file/d/16NRZVEHr8K4zlkFbY3D-eF4kbM0fx-ST/view?usp=classroom_web&authuser=0" }
          ],
        },
        {
          name: "Engineering Thermodynamics",
          semester: "3rd Semester",
          documents: [
            { title: "ET_Introduction", url: "https://docs.google.com/presentation/d/1bIxfowFsFF88Kzu_GiUAQMEMfbcvghdg/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "ET_Chapter_01", url: "https://drive.google.com/file/d/1xamFti_pqdQcb_YFbIYMlgQO-DMLXwqm/view?usp=sharing" },
            { title: "ET_Chapter_02", url: "https://drive.google.com/file/d/1NdjzyFI0bRCd5UyyeybhXuOgKmYTG6Ju/view?usp=sharing" },
            { title: "ET_Chapter_Energybalance", url: "https://drive.google.com/file/d/1Asek4JGC3Uu2RXy2xxAGH6Hq1otCy2P2/view?usp=sharing" },
            { title: "ET_Energy_Closedsystems", url: "https://drive.google.com/file/d/1qFOvCXmObeLoqwqyPQfWj4ITSMwZAtvd/view?usp=sharing" },
            { title: "ET_Thermo_Secondlaw", url: "https://drive.google.com/file/d/1WWuMun4XI9LQvtC39wxEas_R48-WYYGq/view?usp=sharing" },
            { title: "ET_Chap_7_Entropy", url: "https://drive.google.com/file/d/1-8Ll3phWawaVVVbOxaeo7U6qT6ddrr1r/view?usp=sharing" },
            { title: "ET_Chapter8_Exergy", url: "https://drive.google.com/file/d/1hasWBulB3yucV90PZ3clzmvgc0WfDe3C/view?usp=sharing" },
            { title: "ET_Gaspowercycles", url: "https://drive.google.com/file/d/17_rOce9EOBkDAHfLMrhoxRXCCntP9OjU/view?usp=sharing" },
            { title: "ET_Thermo_Puresubstance", url: "https://drive.google.com/file/d/16hGGral6Yovp5Z51umX7QjbHjaX_lDwc/view?usp=sharing" },
            { title: "ET_Vaporpower", url: "https://drive.google.com/file/d/1dUKxmn0EsI2ZBu1Hx6WzSw36Juo8Aq_O/view?usp=sharing" },
            { title: "ET_Ref.cycles", url: "https://drive.google.com/file/d/1igDeUjz2pm41dDuw5BE33FRRdoGzD4MD/view?usp=sharing" },
            { title: "ET_Thermodynamics_relations", url: "https://drive.google.com/file/d/1GzsUKRG0jfzy3z67Qy5MbxW5jeWq7bNm/view?usp=sharing" }
          ],
        },
        {
          name: "FMM",
          semester: "4th Semester",
          documents: [
            { title: "FMM_unit1", url: "https://drive.google.com/file/d/1hjvOeenQAw9Jjl2wt4jgMvM5mFVj3KfV/view?usp=sharing" },
            { title: "FMM_unit2", url: "https://drive.google.com/file/d/1tNROEDHTNRm6m0_5axPZWNTdcvpzDCFG/view?usp=sharing" },
            { title: "FMM_unit3", url: "https://drive.google.com/file/d/1AZBDR0I4JY_fPbZPGJI3amZYrTsHBJn2/view?usp=sharing" },
            { title: "FMM_unit4", url: "https://drive.google.com/file/d/1iaLP8bKR7oiGqw55Bl27DUb5KKSLEz_r/view?usp=sharing" },
            { title: "FMM_unit5", url: "https://drive.google.com/file/d/1jb3p6_HyLdkRLAEbPhUAdvWCdcIeXs0w/view?usp=sharing" },
            { title: "FMM_unit6", url: "https://drive.google.com/file/d/16yCf7HLthUctFjgNM2DZn5VR9F6iiVnj/view?usp=sharing" },
            { title: "FMM_unit7", url: "https://drive.google.com/file/d/11TYa605MEVfHY6OHB0kh-bpYSc5TCN2i/view?usp=sharing" },
            { title: "FMM_unit8", url: "https://drive.google.com/file/d/1cjCIBYS7dYHZWkS_IJ7EvWeqebBWXrlU/view?usp=sharing" }
          ],
        },
        {
          name: "MMF",
          semester: "4th Semester",
          documents: [
            { title: "Sheetmetal Working", url: "https://drive.google.com/file/d/1u6YUISkh_ODNfh77Ijp0aCrUaa7xbXXm/view?usp=sharing" },
            { title: "Forging", url: "https://docs.google.com/presentation/d/1U254E3FivJ7XCTF2BXKmJpkLYHJw1WOy/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
          ],
        },
        {
          name: "Industrial Measurements",
          semester: "4th Semester",
          documents: [
            { title: "Introduction to Measurement", url: "https://drive.google.com/file/d/1qcU_kUEJmBKA6jVZkww-wP-GnkGGr4oT/view?usp=sharing" },
            { title: "Sensor transducers signal conditioning elements", url: "https://drive.google.com/file/d/1eX_8YJCehrpqL4PlplbN7-Njhjz9U0TG/view?usp=sharing" },
            { title: "Static performance characteristics", url: "https://drive.google.com/file/d/1AIbPgljfA-b4-DlGlRCpoKpBoa42Ks0F/view?usp=sharing" },
            { title: "Errors in measurements", url: "https://drive.google.com/file/d/1KtDHtmo0ZlVgMGIW7XLDzyUGrwtUuqe1/view?usp=sharing" },
            { title: "Displacement & Speed measurement", url: "https://drive.google.com/file/d/1p3T1R0KAV8gg7ssQZbEuTVO_1JnpN9kj/view?usp=sharing" },
            { title: "Metrology, Linear measurement", url: "https://drive.google.com/file/d/13kKhSH_Xi0MAjwOgnWACmMEIALaQlH4S/view?usp=sharing" },
            { title: "Angular measurement", url: "https://drive.google.com/file/d/1LqN-GfW3JMRSmN_UwPoMTqFt_AKkPTe0/view?usp=sharing" },
            { title: "Pressure measurement", url: "https://drive.google.com/file/d/1KhUgG8PLdfnpQ-_RBf7ffsnsbaqBZ-vP/view?usp=sharing" },
            { title: "Comparators", url: "https://drive.google.com/file/d/128IMXjH1c7syv3n7ZaISZf4fN7iuu5bR/view?usp=sharing" },
            { title: "Strain measurement", url: "https://drive.google.com/file/d/1MSXBTRhbk2lUb1JL_JlsuFRwvDdViDeX/view?usp=sharing" },
            { title: "Force and Torque measurement", url: "https://drive.google.com/file/d/1Yub12zGLQ1576-LolngHL_UY-su9Soy6/view?usp=sharing" },
            { title: "Limits Fits and Tolerances", url: "https://drive.google.com/file/d/1cGWvPVVFFOlrW3nkYgiDmMA-ewLpz1s1/view?usp=sharing" },
            { title: "Gauges", url: "https://drive.google.com/file/d/1_sUQPAppsxuR09KIbZhGgf6C1_loi4ts/view?usp=sharing" },
            { title: "Temperature measurement", url: "https://drive.google.com/file/d/1pumXVW6VTuldklZMzJZt_729c9uqxuP1/view?usp=sharing" },
            { title: "Flow, Liquid Level, Vibration Measurement", url: "https://drive.google.com/file/d/1uybKHPut10IlU7NZXCHWVzw3q8n5Zgzt/view?usp=sharing" },
            { title: "Measurement of Geometric Forms", url: "https://drive.google.com/file/d/1uPESYkChQb-vORqEDe0c0PCN-SCeJgW7/view?usp=sharing" },
            { title: "Measurement of Screw threads and Gears", url: "https://drive.google.com/file/d/1mTWVpWGnaONfgJrnEBuSUMwEsrcdGo72/view?usp=sharing" },
            { title: "Measurement of Surface roughness", url: "https://drive.google.com/file/d/1_na_jXAgMA6nekMJPmEmpcwlw2d6s9DV/view?usp=sharing" },
            { title: "Automatic Controls", url: "https://drive.google.com/file/d/1RItIwlMIR6CtvvkXZIing47ACedlggAN/view?usp=sharing" },
            { title: "Transfer function", url: "https://drive.google.com/file/d/1MXQSgdF5Pytp3ms1q8I5r_OeRqktJJDL/view?usp=sharing" },
            { title: "F-V, F-I analogy", url: "https://drive.google.com/file/d/1vFDKA9bB1oh83CzScydKrC5MZoXwElKC/view?usp=sharing" },
            { title: "Block diagram reduction", url: "https://drive.google.com/file/d/1AliZYXd6kE7NP3QmvP98-NcFPEqbBWNV/view?usp=sharing" },
            { title: "PID Control", url: "https://drive.google.com/file/d/1O3qVRu921X9CYXvI0Evs_MsweurAXgSu/view?usp=sharing" }
          ],
        },
        {
          name: "Design of Machine Elements",
          semester: "4th Semester",
          documents: [
            { title: " Limit, Tolerance Fits", url: "https://docs.google.com/presentation/d/1H4xvH5XkPFtBu9PyeexNLT2WrXE_0wJo/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Preferred Numbers", url: "https://drive.google.com/file/d/1t6ejpLtH5mqR5e2tA56Wa59HF6GnNSSW/view?usp=sharing" },
            { title: "Introduction", url: "https://drive.google.com/file/d/1fXWjH2QsOAAq5LPz84O78IIfy72uT7WR/view?usp=sharing" }
          ],
        },
        {
          name: "Heat Transfer",
          semester: "5th Semester",
          documents: [
            { title: "Unit1-Part1", url: "https://drive.google.com/file/d/1pRcrjXjPvLzpN3buTAKYf7vQPCgbVIwH/view?usp=sharing" },
            { title: "Unit1-Part2", url: "https://drive.google.com/file/d/1F2pi1AHzd-EGZMczqW2OklhWwJ3Kc6dM/view?usp=sharing" },
            { title: "Unit2", url: "https://drive.google.com/file/d/1_ELVLRkC3WDrDmljIl3_8RenyLbL_Q7X/view?usp=sharing" },
            { title: "Unit3", url: "https://drive.google.com/file/d/172HhHfAa-6HrEeaPiwxPIDsS5Ct7xQCB/view?usp=sharing" },
            { title: "Unit4", url: "https://drive.google.com/file/d/1XHDh5D9wGy48zKOmXIrdWEywe8TISxyo/view?usp=sharing" },
            { title: "Unit5_part1", url: "https://drive.google.com/file/d/1wZI9-sUYvJjtY--yjUgU3As3M7aOgf0Y/view?usp=sharing" },
            { title: "Unit5_part2", url: "https://drive.google.com/file/d/1J8yO12ZKwT1g8xINkBfiYRuqT2JWGbk1/view?usp=sharing" },
            { title: "Unit6", url: "https://drive.google.com/file/d/1YnjtzbVa8fMQMWdLdygFkQbXosyccAVO/view?usp=sharing" }
          ],
        },
        {
            name: "CAD-CAM",
            semester: "5th Semester",
            documents: [
                { title: "Design-for-manufacture", url: "https://drive.google.com/file/d/1-Jd2DYbJohaaarY8jSCGS6WPPRDxeJ4f/view?usp=sharing" },
                { title: "CADCAM Intro", url: "https://drive.google.com/file/d/1lBgyK3Br1ifaFfKKVTOJgzFN-P8VVr1X/view?usp=sharing" },
                { title: "CADCAM Hardware", url: "https://docs.google.com/presentation/d/1ld6Q8nuNGIu-H9g8BjEagTtOHI85k7zP/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
                { title: "CADCAM Graphics", url: "https://docs.google.com/presentation/d/167QSBxZVvU2ZtM_fXoOsw4Rap6FCKlpQ/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
                { title: "CADCAM Geometric modelling", url: "https://docs.google.com/presentation/d/1-HN8nS6PDu9Twc6jhQNraHiAj5-z7ZKt/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
                { title: "CIM Introduction", url: "https://drive.google.com/file/d/1UkzuNo4B3hyjbGKN6v4161rfupq66xEw/view?usp=sharing" },
                { title: "Introduction to CNC machining", url: "https://drive.google.com/file/d/1aa1GDqynJDoR_XSApHD4jTN9iyEXK-qd/view?usp=sharing" },
                { title: "CIM Manufacturing Systems", url: "https://drive.google.com/file/d/1d0a-GuVqip_P_v3WmgKjhTLP6DQ5t4eC/view?usp=sharing" }
            ],
          },
        {
          name: "IC Engine",
          semester: "6th Semester",
          documents: [
            { title: "Introduction_ICEngines", url: "https://drive.google.com/file/d/1sujbju8PU3cATH3k3YwnI-FbvHFGJdyn/view?usp=sharing" },
            { title: "Cylinder_Gasoline_Engine-converted", url: "https://docs.google.com/presentation/d/10Vr4LiCbjgVkOruGFGb6ZXPicLVJPSvH/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Carburettor", url: "https://drive.google.com/file/d/1D6movYxtwoSaIbj9DdbOmvk1yBgtCdSt/view?usp=sharing" },
            { title: "Combustion_ICEngines", url: "https://drive.google.com/file/d/1KjgchnCLtPJ_8E_HSONq3i-61m69qCz8/view?usp=sharing" },
            { title: "Emissions", url: "https://drive.google.com/file/d/1ZELJvCaePdQDImkl_0DUew1kOfR2VIda/view?usp=sharing" },
            { title: "Engine_emissions_v2", url: "https://drive.google.com/file/d/1ox0kc40vFlfBNKza_YS--rMcDDhIFDMb/view?usp=sharing" },
            { title: "Subsystems_ICEngines", url: "https://drive.google.com/file/d/1WBvPaNDKLp4YWdk8X-6t2fPGAXmzDAvz/view?usp=sharing" }
          ],
        },
      ];
      

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);

  const openModal = (lab) => {
    setSelectedLab(lab);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedLab(null);
  };

  return (
    <div className="labs-container">
      <h1 className="labs-header">Theory</h1>
      <div className="labs-grid">
        {labData.map((lab, index) => (
          <div
            key={index}
            className="lab-card"
            onClick={() => openModal(lab)}
          >
            <h2 className="lab-title">{lab.name}</h2>
            <p className="lab-semester">{lab.semester}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="modal-header uppercase ">{selectedLab.name}</h2>
            <div className="modal-content">
              <ul className="modal-list">
                {selectedLab.documents.map((doc, index) => (
                  <li key={index} className="modal-list-item">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      {doc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Theory;
