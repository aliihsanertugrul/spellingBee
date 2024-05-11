import Swal from "sweetalert2";

export const swalAlert = (title, icon = "info", text = "") => {
	// icon: error, success, info, warning, question değerleri alabilir
	Swal.fire({
		title,
		text,
		icon,
	});
};

export const swalToast = (title, icon = "error") => {
    const color = icon === "success" ? "#F8CD05" : "";
	const Toast = Swal.mixin({
		toast: true,
		position: "top",
        width:"13rem",
        heightAuto:"1rem",
		showConfirmButton: false,
		timer: 3000,
        iconColor:color,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		},
	});

	Toast.fire({
		icon,
		title,
	});
};
