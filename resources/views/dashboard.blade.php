<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between items-center">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('UR Cards') }}
            </h2>
            <div class="flex space-x-4">
                <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Add QR</a>
                <a href="#"
                   class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Generate</a>
            </div>
        </div>
    </x-slot>
    <section class="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-5 pt-5 overflow-visible sm:rounded-lg">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            @for($i = 1; $i <= 3; $i++)
                @php
                    $isActive = $i % 2 == 0; // Alternate active state for demonstration
                    $imageSource = $isActive ? 'https://picsum.photos/300' : 'https://picsum.photos/seed/QR/300/300?blur=1';
                @endphp
                <div
                    class="flex flex-col bg-white dark:bg-gray-800 rounded transition transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
                    <div class="p-3 flex flex-col items-center text-center shadow-md">
                        <img alt="team" loading="lazy"
                             class="flex-shrink-0 rounded-lg h-30 w-30 object-cover object-center mb-4 transition transform @if(!$isActive) grayscale @endif"
                             src="{{ $imageSource }}"
                             sizes="(max-width: 300px) 100vw, 300px">
                        <h2 class="title-font font-medium text-lg text-gray-900 dark:text-white text-ellipsis overflow-hidden">
                            Name</h2>
                    </div>
                    <div class="flex justify-between space-x-2 w-full border-t border-gray-300 dark:border-gray-600">
                        <!-- 1st Button -->
                        <a href="#" class="flex-1 flex items-center justify-center font-bold p-3 rounded-bl-lg
                            @if($isActive)
                                bg-transparent text-blue-500 hover:bg-blue-100 hover:text-blue-800
                            @else
                                bg-transparent text-gray-300 cursor-not-allowed
                            @endif"
                           @if(!$isActive) disabled @endif
                           title="{{ $isActive ? 'Open Link' : 'Deactivate' }}">
                            <i class="{{ $isActive ? 'fas fa-eye text-blue-500' : 'fas fa-eye-slash text-gray-300' }} mr-1"></i>
                            {{--                            <span>Open</span>--}}
                        </a>
                        <!-- 2nd Button -->
                        <a href="#" class="flex-1 flex items-center justify-center font-bold p-3
                            bg-transparent text-yellow-500 hover:bg-yellow-100 hover:text-yellow-800"
                           title="Edit">
                            <i class="fas fa-edit text-yellow-500 mr-1"></i>
                            {{--                            <span>Edit</span>--}}
                        </a>
                        <!-- 3rd Button -->
                        <button class="flex-1 flex items-center justify-center font-bold p-3
                            bg-transparent text-red-500 hover:bg-red-100 hover:text-red-800"
                                title="Delete">
                            <i class="fas fa-trash text-red-500 mr-1"></i>
                            {{--                            <span>Delete</span>--}}
                        </button>
                        <!-- 4th Button -->
                        <a href="#" class="flex-1 flex items-center justify-center font-bold p-3
                            @if($isActive)
                                bg-transparent text-red-500 hover:bg-green-100 hover:text-red-800
                            @else
                                bg-transparent text-gray-300  hover:bg-green-100 hover:text-green-800
                            @endif"
                           wire:click="toggleActive({{ $i }})"
                           title="{{ $isActive ? 'Deactivate' : 'Activate' }}">
                            <i class="fas fa-power-off {{ $isActive ? 'text-red-500' : 'text-green-500' }} mr-1"></i>
                            {{--                            <span>{{ $isActive ? 'Deactivate' : 'Activate' }}</span>--}}
                        </a>
                        <!-- 5th Button -->
                        <a href="#" class="flex-1 flex items-center justify-center font-bold p-3 rounded-br-lg
                            @if($isActive)
                                bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800
                            @else
                                bg-transparent text-gray-300 cursor-not-allowed
                            @endif"
                           title="Download">
                            <i class="fas fa-download text-gray-500 mr-1"></i>
                            {{--                            <span>Download</span>--}}
                        </a>
                    </div>
                </div>
            @endfor
        </div>
    </section>
</x-app-layout>
