<script>
    import Chart from "chart.js/auto/auto.esm";
    import { onMount } from "svelte";

    let width;
    let chart;
    let canvas;

    $: chart && chart.resize(width, 224);

    onMount(() => {
        chart = new Chart(canvas.getContext("2d"), {
            type: "line",
            data: {
                labels: [...Array(30).keys()].map(x => `${30 - x} day${(x < 29) ? 's' : ''} ago`),
                datasets: [
                    {
                        label: "KG Recycled",
                        backgroundColor: 'rgb(236, 72, 153)',
                        borderColor: 'rgb(236, 72, 153)',
                        data: Array.from({length: 30}, x => Math.random()),
                    },
                ],
            },
            options: {
                events: [],
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });
    });
</script>

<div class="mt-4 h-56 rounded-xl bg-white p-7" bind:clientWidth={width}>
    <canvas height="224px" bind:this={canvas} />
</div>
